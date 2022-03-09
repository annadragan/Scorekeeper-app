import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <FooterLink to="/">Play</FooterLink>
      <FooterLink to="/history">History</FooterLink>
    </Nav>
  );
}

const FooterLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: white;
  background-color: crimson;

  &.active {
    background-color: #ea3e70;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #ce1661;
  color: white;
  height: 48px;
`;
