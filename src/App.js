import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import SideMenu from "./components/side-menu/SideMenu";

import AppRoutes from "./AppRoutes";

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

        <main className="container">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
