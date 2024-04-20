import { useState } from "react";
import { Header } from "./components/Header/Header";
import { GameArea } from "./components/GameArea/GameArea";
import { Button } from "./components/Button/Button";
import styles from "./App.module.css";

export function App() {
  const [cardStash, setCardStash] = useState([
    { id: 1, cardName: "🍎" },
    { id: 2, cardName: "🍐" },
    { id: 3, cardName: "🍌" },
    { id: 4, cardName: "🍉" },
    { id: 5, cardName: "🍓" },
    { id: 6, cardName: "🥑" },
    { id: 7, cardName: "🍇" },
    { id: 8, cardName: "🍋" },
    { id: 9, cardName: "🫐" },
    { id: 10, cardName: "🍊" },
    { id: 11, cardName: "🥭" },
    { id: 12, cardName: "🍍" },
  ]);
  const [score, setScore] = useState(0);

  function shuffle() {
    const shuffledStash = cardStash.slice();
    return shuffledStash.sort(() => Math.floor(Math.random() - 0.5));
  }

  function handleButtonClick() {
    const shuffledStash = shuffle();
    setCardStash(shuffledStash);
    setScore(score + 1);
  }
  return (
    <>
      <Header score={score} bestScore={0} />
      <GameArea>
        {cardStash.map((card) => (
          <Button onClick={handleButtonClick} key={card.id}>
            {card.cardName}
          </Button>
        ))}
      </GameArea>
    </>
  );
}
