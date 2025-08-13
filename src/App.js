import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./components/home";
import ContextExample from "./components/context-example";
import PropDrillingExample from "./components/prop-drilling";
import Timer from "./components/timer/Timer";
import PriceCalculator from "./components/price-calculator";
import Message from "./components/message";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>React Test</h1>
        </header>
        <aside>
          <SideMenu />
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/context-example" element={<ContextExample />} />
            <Route path="/prop-drilling" element={<PropDrillingExample />} />
            <Route path="/price-calculator" element={<PriceCalculator />} />
            <Route path="/timer-example" element={<Timer />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
