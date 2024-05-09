import { createContext, ReactNode, useState } from "react";

import { destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  singOut: () => void;
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

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      //console.log(response.data);
    } catch (error) {
      console.log("Error to access", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
