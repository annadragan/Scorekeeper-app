import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Play</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}
