import { Header } from "@/src/components/Header";
import { canSSRAuth } from "@/src/utils/canSSRAuth";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Sujeito pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <div className={styles.containerHeader}></div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
