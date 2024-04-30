import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import logoImg from "../../public/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />
        <div className={styles.login}>
          <form></form>
        </div>
      </div>
    </>
  );
}
