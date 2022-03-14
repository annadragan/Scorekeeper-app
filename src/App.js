import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Game from './pages/Game';
import CreateGame from './pages/Create';
import History from './pages/History';

export default function App() {

  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');
  const [overview, setOverview] = useState([]);
  const navigate = useNavigate();

  
  function createGame(game) {
    const newGame = game;
    setNameOfGame([...nameOfGame, newGame]);
  }

  function addPlayer(playerNames) {
    const newPlayers = playerNames.map(name => ({
      name: name,
      score: 0,
      id: nanoid(),
    }));
    setPlayers([...players, ...newPlayers]);
  }

  function startGame() {
    if (nameOfGame === '' && players.length === 0) {
      alert("Enter a game and player's name");
    } else {
      navigate('./gamepage');
    }
  }
  
  function increasePlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })));
  }
  
  
  function endGame() {
    if (nameOfGame === '' && players.length === 0) {
      alert('You did not create any game yet!');
    } else {
      setOverview([{ players, nameOfGame, id: nanoid() }, ...overview]);
      setPlayers([]);
      setNameOfGame('');
      navigate('./overview');
    }
  }
  function startNewGame() {
    navigate('./createpage');
  }

  return (
    <AppLayout>
      <h1>⚽ Scorekeeper</h1>
    <Navigation nameOfGame={nameOfGame} players={players} />
      <Routes>
        <Route
          path="/createpage"
          element={
            <CreateGame
              players={players}
              nameOfGame={nameOfGame}
              onCreateGame={createGame}
              onAddPlayer={addPlayer}
              onStartGame={startGame}
              // kommm
              onPlayGame={startNewGame}
            />
          }
        />
        <Route
          path="/gamepage"
          element={
            <Game
              nameOfGame={nameOfGame}
              players={players}
              onDecreasePlayerScore={decreasePlayerScore}
              onIncreasePlayerScore={increasePlayerScore}
              onReset={resetScores}
              onGameOver={endGame}
            />
          }
        />
        <Route
          path="/overview"
          element={<History overview={overview} onPlayGame={startNewGame} />}
        />
      </Routes>
    </AppLayout>
  ); 
}

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  background-color: #e331;
  box-shadow: 2px 2px 8px pink;
  border-radius: 4px;
  padding: 20px;
  margin-top: 30%;
`;