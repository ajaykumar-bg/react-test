import "./App.css";
import ContextExample from "./components/context-example";
import PropDrillingExample from "./components/prop-drilling";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Test</h1>
      </header>
      <main>
        <PropDrillingExample />
        <ContextExample />
      </main>
    </div>
  );
}

export default App;
