import { Link, NavLink, useLocation } from "react-router-dom";

import inspectWiseLogo from "../../images/inspectwise-logo.svg";

import "./Sidebar.css";

// ---------------------------------- //

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHomePage = currentPath === "/";
  const isChecklistPage = currentPath.endsWith("/checklist");

  const isComponentDetailsPage = currentPath.startsWith("/explorer/") && !isChecklistPage;

  const componentId = currentPath.split("/")[2];

  // ---------------------------------- //

  function renderSidebarTopContent() {
    if (isHomePage) {
      return (
        <ul className="sidebar-actions">
          <li>
            <Link to="/explorer" onClick={onClose}>
              Explore The House
            </Link>
          </li>

          <li>
            <Link to="/ai-assistant" onClick={onClose}>
              Ask AI
            </Link>
          </li>
        </ul>
      );
    }

    if (isChecklistPage) {
      return (
        <Link className="sidebar-back-link" to={`/explorer/${componentId}`} onClick={onClose}>
          <i className="bi bi-arrow-left" aria-hidden="true"></i>
          <span>Back to Component Details</span>
        </Link>
      );
    }

    if (isComponentDetailsPage) {
      return (
        <Link className="sidebar-back-link" to="/explorer" onClick={onClose}>
          <i className="bi bi-arrow-left" aria-hidden="true"></i>
          <span>Back to Explorer</span>
        </Link>
      );
    }

    return (
      <Link className="sidebar-back-link" to="/" onClick={onClose}>
        <i className="bi bi-arrow-left" aria-hidden="true"></i>
        <span>Back to Home</span>
      </Link>
    );
  }

  // ---------------------------------- //

  return (
    <aside id="mainSidebar" className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <button className="sidebar-close-button" type="button" onClick={onClose} aria-label="Close navigation menu">
        <i className="bi bi-x-lg" aria-hidden="true"></i>
      </button>

      <div className="sidebar-brand">
        <NavLink to="/" onClick={onClose} aria-label="InspectWise home">
          <img src={inspectWiseLogo} alt="InspectWise" className="sidebar-logo" />
        </NavLink>
      </div>

      <nav aria-label="Main navigation">
        <div className="sidebar-top-content">{renderSidebarTopContent()}</div>

        <h2 className="sidebar-heading">Main Menu</h2>

        <ul className="sidebar-nav">
          <li>
            <NavLink to="/explorer" onClick={onClose} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-search" aria-hidden="true"></i>
              <span>Explore</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-assistant" onClick={onClose} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-stars" aria-hidden="true"></i>
              <span>AI Assistant</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={onClose} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="bi bi-info-lg" aria-hidden="true"></i>
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

// ---------------------------------- //

export default Sidebar;
