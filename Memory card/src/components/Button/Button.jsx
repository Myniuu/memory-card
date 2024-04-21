import styles from "./Button.module.css";

export function Button({ value, onClick, children }) {
  return (
    <button className={styles.cardButton} value={value} onClick={onClick}>
      {children}
    </button>
  );
}
