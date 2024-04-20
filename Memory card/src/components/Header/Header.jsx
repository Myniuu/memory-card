import styles from "./Header.module.css";

export function Header({ score, bestScore }) {
  return (
    <header>
      <div>
        <h1>Memory Game</h1>
      </div>
      <div>
        <p>{`Score: ${score}`}</p>
        <p>{`Best score: ${bestScore}`}</p>
      </div>
    </header>
  );
}
