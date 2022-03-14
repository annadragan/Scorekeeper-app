import styled from 'styled-components';

import HistoryOverview from '../components/HistoryOverview';


export default function History({ overview }) {
  return (
    <OverviewPage>
      {overview.map(({ nameOfGame, players, id }) => (
        <HistoryOverview key={id} nameOfGame={nameOfGame} players={players} />
      ))}
     
    </OverviewPage>
  );
}

const OverviewPage = styled.div`
 padding: 12px 20px;
 display: flex;
 justify-content: center;
 font-size: 1.2rem;
`;