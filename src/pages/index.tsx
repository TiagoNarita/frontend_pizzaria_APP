import { useContext, FormEvent } from "react";

import Head from "next/head";
import styles from "../../styles/home.module.scss";
import logoImg from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "tiago@teste.com",
      password: "12345",
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button loading={false}>Acessar</Button>
          </form>
          <Link href="/signup">
            <p className={styles.text}>Não possui uma conta? Cadastra-se</p>
          </Link>
        </div>
      </div>
    </>
  );
}
