import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./GameArea.module.css";

export function GameArea() {
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

  function shuffle() {
    const shuffledStash = cardStash.slice();
    return shuffledStash.sort(() => Math.floor(Math.random() - 0.5));
  }

  function handleButtonClick() {
    const shuffledStash = shuffle();
    setCardStash(shuffledStash);
  }

  return (
    <main>
      {cardStash.map((card) => (
        <Button value={card.id} onClick={handleButtonClick} key={card.id}>
          {card.cardName}
        </Button>
      ))}
    </main>
  );
}
