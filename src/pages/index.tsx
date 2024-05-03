import Head from "next/head";
import styles from "../../styles/home.module.scss";
import logoImg from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button loading={false}>Cadastrar</Button>
          </form>

          <a className={styles.text}>Não possui uma conta? Cadastra-se</a>
        </div>
      </div>
    </>
  );
}
