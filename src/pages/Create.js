import { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';


export default function CreateGame({
  players,
  nameOfGame,
  onAddPlayer,
  onCreateGame,
  onStartGame,
  // kommm
  // onPlayGame
}) {

  const [game, setGame] = useState('');
  const [playerNames, setPlayerNames] = useState('');

  // const disabled = nameOfGame === '' || playerNames === '';
   function handleSubmitGame(event) {
    event.preventDefault();
    onCreateGame(game);
    setGame('');
  }

  function handleSubmitPlayer(event) {
    event.preventDefault();
    onAddPlayer(playerNames.split(',').map(name => name.trim()));
    setPlayerNames('');
  }

  return (
    <>
      <Form
        aria-labelledby="formHeader"
        onSubmit={handleSubmitGame}
        autoComplete="off"
      >
          <Input
            name={'game-name'}
            labelText="Name of game"
            placeholder="e.g. WeyKick"
            type="text"
            value={game}
            onChange={event => setGame(event.target.value)}
            required
          />
        <Button>Create Game</Button>
      </Form>
      <Form
      aria-labelledby="formHeader"
        onSubmit={handleSubmitPlayer}
        autoComplete="off"
      >
          <Input
            id={'player-names'}
            name={'player-names'}
            labelText="Player Names"
            placeholder="e.g. Laura, Kathrin, Jan"
            type="text"
            value={playerNames}
            onChange={event => setPlayerNames(event.target.value)}
            required
          />
       <Button aria-label="Add Player">Add Player</Button>
      </Form>
      <Container>
      <Game>{nameOfGame}</Game>
      {players.map(({ name, id }) => (
        <p key={id} name={name}>
          {name}
        </p>
      ))}
      </Container>
      <Button  aria-label="Start game" onClick={onStartGame}>Play</Button>
   {/* kommm */}
       {/* <Button aria-label="Play button" onClick={onPlayGame}>Play game</Button> */}
      </>
  );

}

const Form = styled.form`
  display: grid;
  gap: 5px;
`;

const Game = styled.p`
font-size: 1.3rem;
`;

const Container = styled.div`
margin: 0;
`