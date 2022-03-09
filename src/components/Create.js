import styled from 'styled-components';

export default function Create({ take, onClick }) {
  return <ButtonCreate onClick={onClick}>{take}</ButtonCreate>;
}

const ButtonCreate = styled.button`
  background-color: lightpink;
  border: 1px solid peachpuff;
  font-size: 1.2rem;
  padding: 7px;
  border-radius: 4px;
  color: azure;
  width: 70%;
  border: 1px solid crimson;
`;
