import styled from 'styled-components';

export default function CreateButton({onClick, children}) {
  return <ButtonCreate onClick={onClick}>
      {children}</ButtonCreate>;
}

const ButtonCreate= styled.button`
  background-color: #b42041;
  border: 1px solid peachpuff;
  font-size: 1.2rem;
  padding: 7px;
  border-radius: 4px;
  color: azure;
  border: 1px solid crimson;
  margin: 5px;
  background-color: #ea3e70;
`;
