import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <EmojiProvider>
      <main>
        <Emoji />
        <BitcoinRates />
      </main>
    </EmojiProvider>
  );
}

export default App;
