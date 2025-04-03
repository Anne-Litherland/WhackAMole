import { useGame } from "./GameContext";

export default function Welcome() {
  const { start, highScores } = useGame();
  return (
    <>
      <section className="welcome">
        <h1>Whack A Mole</h1>
        <p>Whack a mole to earn points.</p>
        <button onClick={start}>Play</button>
      </section>
      <section className="highscores">
        <h2>High Scores</h2>
        <ul>
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>Nothing here yet!</li>
          )}
        </ul>
      </section>
    </>
  );
}
