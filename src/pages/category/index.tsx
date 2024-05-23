import { Header } from "@/src/components/Header";
import Head from "next/head";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import { api } from "@/src/services/apiClient";
import { toast } from "react-toastify";
import { canSSRAuth } from "@/src/utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleRegiste(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      toast.error("Insira o nome de uma categoria");
      return;
    }

    await api.post("/category", {
      name,
    });

    toast.success("categoria cadastrada com sucesso!");
    setName("");
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

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
