import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <FooterLink to="/">Start</FooterLink>
      <FooterLink to="/gamepage">Score</FooterLink>
      <FooterLink to="/overview">Overview</FooterLink>
    </Nav>
  );
}

const FooterLink = styled(NavLink)`
  display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 2px 23px;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: white;
  background-color: crimson;
  margin: 0 7px;
  padding: 10px;

  &.active {
    background-color: #ea3e70;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  height: 48px;
`;