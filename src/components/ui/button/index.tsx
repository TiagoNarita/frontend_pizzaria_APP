import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

//this ...props is all properties in the true element like type, disabled
export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} disabled={loading} {...props}>
      {loading ? (
        <FaSpinner color="#fff" size={16} />
      ) : (
        <a className={styles.buttonText}>{children}</a>
      )}
    </button>
  );
}
