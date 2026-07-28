import { NavLink } from "react-router-dom";
import inspectWiseLogo from "../../images/inspectwise-logo.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <NavLink to="/" aria-label="InspectWise home">
          <img src={inspectWiseLogo} alt="InspectWise" className="sidebar-logo" />
        </NavLink>
      </div>

      <nav aria-label="Main navigation">
        <ul className="sidebar-actions">
          <li>
            <NavLink to="/explorer">Explore The House</NavLink>
          </li>

          <li>
            <NavLink to="/ai-assistant">Ask AI</NavLink>
          </li>
        </ul>

        <h2 className="sidebar-heading">Main Menu</h2>

        <ul className="sidebar-nav">
          <li>
            <NavLink to="/explorer" className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-search" aria-hidden="true"></i>
              <span>Explore</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-assistant" className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-stars" aria-hidden="true"></i>
              <span>AI Assistant</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-info-lg" aria-hidden="true"></i>
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
