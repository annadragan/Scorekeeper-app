import Button from './components/Button';
import Player from './components/Player';
import Input from './components/Input';
import Create from './components/Create';

function App() {
  return (
    <>
      <h1>Scorekeeper</h1>
      <Player name="Jane Doe" score="9" />
      <Input label="Name of game" />
      <Create take="Create game" />
      <Button children="Click me" />
    </>
  );
}

export default App;
