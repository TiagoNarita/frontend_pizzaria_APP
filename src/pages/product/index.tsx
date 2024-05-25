import Head from "next/head";
import styles from "./styles.module.scss";
import { canSSRAuth } from "@/src/utils/canSSRAuth"; // Verifique este caminho
import { Header } from "@/src/components/Header";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";

export default function Product() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState("");

  return (
    <>
      <Head>
        <title>Novo produto - sujeito pizza</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <label className={styles.labelAvatar}>
            <span>
              <FiUpload size={25} color="#fff" />
            </span>

            <input type="file" accept="image/png, image/jpeg" />

            <img src="" alt="foto do produto" width={250} height={250} />
          </label>

          <form className={styles.form}>
            <select>
              <option>Bebida</option>
              <option>Pizzas</option>
            </select>

            <input
              type="text"
              placeholder="Digite o nome do produto"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Preço do produto"
              className={styles.input}
            />

            <textarea
              placeholder="Descreva seu produto"
              className={styles.input}
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
