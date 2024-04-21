import styles from "./GameArea.module.css";

export function GameArea({ children }) {
  return <main className={styles.cardArea}>{children}</main>;
}
