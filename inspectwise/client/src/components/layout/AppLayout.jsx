import { Outlet } from "react-router-dom";

import Footer from "./Footer.jsx";
import Sidebar from "./Sidebar.jsx";

import "./AppLayout.css";

// ---------------------------------- //

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

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
