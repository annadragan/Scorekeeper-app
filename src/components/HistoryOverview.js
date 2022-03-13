import styled from 'styled-components';
import Button from '../components/Button';
import {useState} from 'react'; 

export default function HistoryEntry({ nameOfGame, players }) {
const [toggleScore, setToggleScore] = useState(false)

  return (
    <HistoryWrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      <Button onClick={() => setToggleScore(!toggleScore)}>Show score</Button>
      {toggleScore &&
      players.map(({ name, score, id }) => (
        <Player key={id}>
          <span>{name}</span>
          <span>{score}</span>
        </Player>
      ))}
    </HistoryWrapper>
  );
}

const HistoryWrapper = styled.section`
  display: grid;
  gap: 10px;
  padding: 8px;
  margin: 10px;
  border: 1px solid crimson;
  background-color: azure;
  border-radius: 4px 24px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;