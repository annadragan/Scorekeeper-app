import Player from '../components/Player';
import CreateButton from '../components/CreateButton';

export default function Game({
  nameOfGame,
  players,
  onReset,
  onGameOver,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
  onPlayGame
}) {
  return (
    <>
      <header>
        <h2>{nameOfGame}</h2>
      </header>
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
          onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
        />
      ))}
      <CreateButton  aria-label="Reset scores" onClick={onReset}>Reset scores</CreateButton>
      <CreateButton  aria-label="Game over" onClick={onGameOver}>Game over</CreateButton>
    </>
  );
}

