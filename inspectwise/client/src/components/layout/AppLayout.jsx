import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

import "./AppLayout.css";

// ---------------------------------- //

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="app-layout">
      <button className="mobile-menu-button" type="button" onClick={handleOpenSidebar} aria-label="Open navigation menu" aria-expanded={isSidebarOpen} aria-controls="mainSidebar">
        <i className="bi bi-list" aria-hidden="true"></i>
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {isSidebarOpen && <button className="sidebar-overlay" type="button" aria-label="Close navigation menu" onClick={handleCloseSidebar}></button>}

      <div className="app-content">
        <main className="main-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

// ---------------------------------- //

export default AppLayout;
