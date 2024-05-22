import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import { useContext } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";

export const Header = () => {
  const { singOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/logo.svg" alt="logo.png" width={190} height={60} />
        </Link>

        <nav className={styles.navMenu}>
          <Link href="/category">
            <p>Categoria</p>
          </Link>
          <Link href="/product ">
            <p>Cardapio</p>
          </Link>

          <button onClick={singOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};
