import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
