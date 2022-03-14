import styled from 'styled-components';
import Button from '../components/Button';

export default function Play( {onPlayGame} ) {
  return (

 <Button aria-label="Play button" onClick={onPlayGame}>Play game</Button>
  );
}
