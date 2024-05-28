import Head from "next/head";
import styles from "./styles.module.scss";
import { canSSRAuth } from "@/src/utils/canSSRAuth"; // Verifique este caminho
import { Header } from "@/src/components/Header";
import { FiUpload } from "react-icons/fi";
import { ChangeEvent, useEffect, useState } from "react";
import { setupAPIClient } from "@/src/services/api";
import { api } from "@/src/services/apiClient";
import { log } from "console";

export default function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState<File | null>(null);
  const [category, setCategory] = useState([
    {
      name: "",
      id: "",
    },
  ]);
  const [categorySelect, setCategorySelect] = useState("");

  useEffect(() => {
    const getCategory = async () => {
      const response = await api.get("/category");
      setCategory(response.data);
    };

    getCategory();
  }, []);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleChangeCategory(event: any) {
    setCategorySelect(event.target.value);
  }

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
              <FiUpload size={30} color="#fff" />
            </span>

            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
            {avatarUrl && (
              <img
                className={styles.preview}
                src={avatarUrl}
                alt="foto do produto"
                width={250}
                height={250}
              />
            )}
          </label>

          <form className={styles.form}>
            <select value={categorySelect} onChange={handleChangeCategory}>
              {category.map((category, index) => {
                return (
                  <option key={category.id} value={index}>
                    {category.name}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="Digite o nome do produto"
              className={styles.input}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Preço do produto"
              className={styles.input}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <textarea
              placeholder="Descreva seu produto"
              className={styles.input}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
