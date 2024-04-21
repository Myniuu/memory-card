import styles from "./Header.module.css";

export function Header({ score, bestScore }) {
  return (
    <div className={styles.header}>
      <div>
        <h1>Memory Game</h1>
      </div>
      <div className={styles.scoreContainer}>
        <p>{`Score: ${score}`}</p>
        <p>{`Best score: ${bestScore}`}</p>
      </div>
    </div>
  );
}
