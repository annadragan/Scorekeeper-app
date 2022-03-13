import styled from 'styled-components';

export default function Player({
  name,
  score,
  onIncreasePlayerScore,
  onDecreasePlayerScore
}) {
  return (
    <PlayerInfo>
      {name}
      <PlayerScore>
      <PlayerButton aria-label="Decrease score" onClick={onDecreasePlayerScore}>
        -
      </PlayerButton>
      <span>{score}</span>
      <PlayerButton aria-label="Increase score" onClick={onIncreasePlayerScore}>
        +
      </PlayerButton>
       </PlayerScore>
    </PlayerInfo>
  );
}

const PlayerInfo = styled.div`
  margin-right: auto;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const PlayerScore = styled.div`
  margin: 0 12px;
  display: flex;
  align-items: center;
`;

const PlayerButton = styled.button`
  background-color: crimson;
  color: whitesmoke;
  padding: 6px;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  height: 2.2rem;
  width: 2.2rem;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;