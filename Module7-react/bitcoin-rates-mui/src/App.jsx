import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BitcoinRatesPage from "./pages/BitcoinRatesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <NavBar />

      <Container component="main" maxWidth="md" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bitcoin-rates" element={<BitcoinRatesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
