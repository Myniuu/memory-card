import { useState } from "react";
import { Button } from "../Button/Button";
import { cardStash } from "../CardStash/CardStash";
import styles from "./GameArea.module.css";

export function GameArea() {
  const [changePosition, setChangePosition] = useState("");

  return (
    <main>
      {cardStash.map((card) => (
        <Button
          value={card.id}
          onClick={(e) => console.log(e.target.value)}
          key={card.id}
        >
          {card.cardName}
        </Button>
      ))}
    </main>
  );
}
