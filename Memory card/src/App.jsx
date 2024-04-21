import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { GameArea } from "./components/GameArea/GameArea";
import { WinScreen } from "./components/WinScreen/WinScreen";
import { Button } from "./components/Button/Button";

export function App() {
  const [isWin, setIsWin] = useState(false);
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState(0);
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

  useEffect(() => {
    if (score.length === cardStash.length) {
      setIsWin(true);
    }
  }, [score]);

  function shuffle() {
    const slicedStash = cardStash.slice();
    return slicedStash.sort(() => Math.floor(Math.random() - 0.5));
  }

  function handleButtonClick(e) {
    const shuffledStash = shuffle();
    setCardStash(shuffledStash);

    if (!score.includes(e.target.value)) {
      setScore((prevScore) => [...prevScore, e.target.value]);
    } else {
      setScore([]);
      if (bestScore < score.length) {
        setBestScore(score.length);
      }
    }
  }

  function repeatGame() {
    setIsWin(false);
    setScore([]);
    setBestScore(0);
  }

  if (isWin) {
    return <WinScreen onClick={repeatGame} />;
  }
  return (
    <>
      <Header score={score.length} bestScore={bestScore} />
      <GameArea>
        {cardStash.map((card) => (
          <Button value={card.id} onClick={handleButtonClick} key={card.id}>
            {card.cardName}
          </Button>
        ))}
      </GameArea>
    </>
  );
}
