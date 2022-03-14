import styled from 'styled-components';

export default function CreateButton({onClick, children}) {
  return <ButtonCreate onClick={onClick}>
      {children}</ButtonCreate>;
}

const ButtonCreate= styled.button`
  background-color: #b42041;
  border: 1px solid peachpuff;
  font-size: 1rem;
  padding: 7px;
  border-radius: 2px 24px;
  color: azure;
  border: 1px solid crimson;
  margin: 5px;
  background-color: #ea3e70;
       
       &:hover {
    transition: 0.4s;
    background-color: #ffc0cb;
    border: 1px solid azure;
    color: crimson;
`;
