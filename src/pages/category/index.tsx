import { Header } from "@/src/components/Header";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Category() {
  return (
    <>
      <Head>
        <title>Nova categoria - sujeito pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form className={styles.form}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </main>
      </div>
    </>
  );
}
