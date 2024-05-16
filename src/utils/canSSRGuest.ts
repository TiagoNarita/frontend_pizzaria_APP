import {
  GetServerSideProps,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from "next";

import { parseCookies } from "nookies";

// Função para páginas que só podem ser acessadas por visitantes
export function canSSRGuest<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
): GetServerSideProps<P> {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    // Se o usuário tentar acessar a página, mas já tiver um login salvo, redirecionamos
    const cookies = parseCookies(ctx);

    if (cookies["@nextauth.token"]) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
