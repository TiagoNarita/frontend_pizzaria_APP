import Head from "next/head";
import styles from "../../../styles/home.module.scss";
import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form>
            <Input placeholder="Digite seu Nome" type="text" />
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button loading={false}>Cadastrar</Button>
          </form>
          <Link href="/">
            <p className={styles.text}>Já possui uma conta? Faça login</p>
          </Link>
        </div>
      </div>
    </>
  );
}
