import "./App.css";
import Timer from "./components/timer/Timer";
// import ContextExample from "./components/context-example";
// import PropDrillingExample from "./components/prop-drilling";

// import PriceCalculator from "./components/price-calculator";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Test</h1>
      </header>
      <main>
        {/* <PropDrillingExample />
        <ContextExample />
        <PriceCalculator /> */}
        <Timer />
      </main>
    </div>
  );
}

export default App;
