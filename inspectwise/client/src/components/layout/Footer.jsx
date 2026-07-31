import { Link } from "react-router-dom";
import "./Footer.css";

// ---------------------------------- //

function Footer() {
  return (
    <footer className="site-footer">
      <p>InspectWise 2026</p>

      <nav aria-label="Footer navigation">
        <ul>
          <li>
            <a href="#privacy">Privacy</a>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

// ---------------------------------- //

export default Footer;
