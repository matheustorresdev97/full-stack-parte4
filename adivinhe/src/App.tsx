import { useState } from "react";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import type { GuessProps } from "./components/LettersUsed";
import { WORDS, type Challenge } from "./utils/words";

export default function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [guesses, setGuesses] = useState<GuessProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const ATTEMPT_LIMIT = 10;

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setGuesses([]);
  }

  function handleRestartGame() {
    const isConfirmed = window.confirm(
      "Você tem certeza que deseja reiniciar?"
    );

    if (isConfirmed) {
      startGame();
    }
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          max={ATTEMPT_LIMIT}
          current={guesses.length}
          onRestart={handleRestartGame}
        />
      </main>
    </div>
  );
}
