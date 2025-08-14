import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import SideMenu from "./components/side-menu/SideMenu";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
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
