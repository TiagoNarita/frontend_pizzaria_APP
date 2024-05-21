import { Header } from "@/src/components/Header";
import { canSSRAuth } from "@/src/utils/canSSRAuth";
import Head from "next/head";
export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Sujeito pizzaria</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
