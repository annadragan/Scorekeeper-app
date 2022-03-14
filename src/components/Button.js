import styled, {css} from 'styled-components';

export default function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyled isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border: none;
  margin: 10px;
  padding: 6px;
  border-radius: 1px 24px;
  height: 30px;
  font-size: 1rem;
  background-color: ${props => (props.isDark ? 'rgb(124, 18, 39)' : 'crimson')};
  color: ${props => (props.isDark ? 'whitesmoke' : 'white')};
  box-shadow: ${props =>
    props.isDark
      ? '2px 2px 8px rgb(0 0 0 / 0.5)'
      : '2px 2px 8px rgb(0 0 0 / 0.5)'};

/* CreateButton Komponente ersetzen: */
  /* ${props=> props.variant === 'primary' &&
  css`  background-color: #b42041;
  border: 1px solid peachpuff;
  font-size: 1.2rem;
  padding: 7px;
  border-radius: 4px;
  color: azure;
  border: 1px solid crimson;
  margin: 5px;
  background-color: #ea3e70;
       
       &:hover {
    transition: 0.4s;
    background-color: #ffc0cb;`} */
`;
