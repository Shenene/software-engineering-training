import { Route, Routes } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import AboutPage from "./pages/AboutPage";
import AiAssistantPage from "./pages/AiAssistantPage";
import BuildingExplorerPage from "./pages/BuildingExplorerPage";
import ComponentDetailsPage from "./pages/ComponentDetailsPage";
import HomePage from "./pages/HomePage";
import InspectionChecklistPage from "./pages/InspectionChecklistPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/explorer" element={<BuildingExplorerPage />} />

        <Route path="/components/:componentId" element={<ComponentDetailsPage />} />

        <Route path="/components/:componentId/checklist" element={<InspectionChecklistPage />} />

        <Route path="/ai-assistant" element={<AiAssistantPage />} />

        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
