import styled from 'styled-components';

export default function History({ game, person, score }) {
  return (
    <HistoryPage>
      <ul role="list">
        <li>
          {game}
          {person}
          {score}
        </li>
        <li>
          {game}
          {person}
          {score}
        </li>
        <li>
          {game}
          {person}
          {score}
        </li>
        <li>
          {game}
          {person}
          {score}
        </li>
      </ul>
    </HistoryPage>
  );
}

const HistoryPage = styled.section`
  //   padding: 12px 20px;
  //   display: flex;
  //   justify-content: center;
  //   font-size: 1.2rem;
`;
