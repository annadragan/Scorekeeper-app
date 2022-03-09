import styled from 'styled-components';

export default function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyled isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border: none;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 1.2rem;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 0.5);
  background-color: ${props => (props.isDark ? 'rgb(124, 18, 39)' : 'crimson')};
  color: ${props => (props.isDark ? 'whitesmoke' : 'white')};
`;
