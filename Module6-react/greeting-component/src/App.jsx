import Greeting from "./components/Greeting.jsx";
import "./App.css";

function App() {
  return (
    <main>
      {/* Greeting using the default name value */}
      <Greeting />

      {/* Greeting with a name prop */}
      <Greeting name="Shenene">
        {/* Content passed as the children prop */}
        <p>Greeting Message</p>
      </Greeting>
    </main>
  );
}

export default App;
