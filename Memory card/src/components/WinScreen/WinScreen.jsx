import styles from "./WinScreen.module.css";

export function WinScreen({ onClick }) {
  return (
    <>
      <div className={styles.container}>
        <h1>Congratulations</h1>
        <h2>You win!</h2>
        <button className={styles.playAgainBtn} onClick={onClick}>
          Play again
        </button>
      </div>
    </>
  );
}
