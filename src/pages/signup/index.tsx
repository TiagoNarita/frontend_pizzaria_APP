import Head from "next/head";
import styles from "../../../styles/home.module.scss";
import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";

import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUP = async (event: FormEvent) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("preencha os campos");
      return;
    }
    const data = {
      name,
      email,
      password,
    };

    setLoading(true);

    await signUp(data);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form onSubmit={handleSignUP}>
            <Input
              placeholder="Digite seu Nome"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <p className={styles.text}>Já possui uma conta? Faça login</p>
          </Link>
        </div>
      </div>
    </>
  );
}
