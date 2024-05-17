import { createContext, ReactNode, useEffect, useState } from "react";

import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";
import path from "path";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  singOut: () => void;
  signUp: (credential: SignUpProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function singOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.log("Erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    // tentar pegar algo no coookie
    const { "@nextauth.token": token } = parseCookies();

    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { id, name, email } = response.data;

          setUser({
            id,
            name,
            email,
          });
        })
        .catch(() => {
          singOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // expire im 1 month
        path: "/",
      });

      setUser({
        id,
        name,
        email,
      });

      //pass token to next requests
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
      toast.success("logado com sucesso");
    } catch (error) {
      toast.error("Erro ao acessar!");
      console.log("Error to access", error);
    }
  }

  async function signUp({ email, password, name }: SignUpProps) {
    try {
      const resp = await api.post("/users", {
        name,
        email,
        password,
      });
      toast.success("Conta criada com sucesso");
      Router.push("/");

      console.log(resp);
    } catch (error) {
      toast.error("Erro ao cadastrar");
      console.log("Error to signUp", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, singOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
