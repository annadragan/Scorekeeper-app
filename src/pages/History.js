import styled from 'styled-components';
import Button from '../components/Button';
import HistoryOverview from '../components/HistoryOverview';


export default function History({ overview, onPlayGame }) {
  return (
    <OverviewPage>
      {overview.map(({ nameOfGame, players, id }) => (
        <HistoryOverview key={id} nameOfGame={nameOfGame} players={players} />
      ))}
      <Button aria-label="Play button" onClick={onPlayGame}>Play game</Button>
    </OverviewPage>
  );
}

const OverviewPage = styled.div`
 padding: 12px 20px;
 display: flex;
 justify-content: center;
 font-size: 1.2rem;
`;