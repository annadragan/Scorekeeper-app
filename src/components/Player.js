import styled from 'styled-components';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <PlayerInfo>
      <PlayerName>{name}</PlayerName>
      <PlayerButton onClick={onDecrement}>-</PlayerButton>
      <PlayerScore>{score}</PlayerScore>
      <PlayerButton onClick={onIncrement}>+</PlayerButton>
    </PlayerInfo>
  );
}
const PlayerInfo = styled.section`
  display: flex;
  justify-content: right;
`;
const PlayerName = styled.span`
  margin-right: auto;
`;

const PlayerScore = styled.span`
  margin: 0 12px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;