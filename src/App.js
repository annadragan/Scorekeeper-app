import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Player from './components/Player';
import Input from './components/Input';
// import Create from './components/Create';
import History from './pages/History';
import Play from './pages/Play';
import Navigation from './components/Navigation';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Player name="Jane Doe" score="9" />
      <Input label="Name of game" placeholder="e.g. Carcassonne" />
      <Input label="Player names" placeholder="e.g. John Doe, Jane Doe" />
      {/* <Create take="Create game" /> */}
      <Button children="Create game" />
      {/* <History history="History" />
      <Play secondpage="Play" /> */}
      <Routes>
        <Route path="/" component={<Play />} />
        <Route path="/history" component={<History />} />
      </Routes>
      <Navigation />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  background-image: url('./images/immo-wegmann-DX3_dXuHVl8-unsplash.jpg');
  background-color: #ffe4e1;
`;
