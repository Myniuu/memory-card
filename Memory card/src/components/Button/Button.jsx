import styles from "./Button.module.css";

export function Button({ value, onClick, children }) {
  return (
    <button value={value} onClick={onClick}>
      {children}
    </button>
  );
}
