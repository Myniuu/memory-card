import styles from "./Button.module.css";

export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
