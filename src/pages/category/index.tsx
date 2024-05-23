import { Header } from "@/src/components/Header";
import Head from "next/head";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import { setupAPIClient } from "@/src/services/api";

export default function Category() {
  const [name, setName] = useState("");

  async function handleRegiste(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      return;
    }
  }

  return (
    <>
      <Head>
        <title>Nova categoria - sujeito pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form className={styles.form} onSubmit={handleRegiste}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
