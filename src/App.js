import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import SideMenu from './components/side-menu/SideMenu';
import AppRoutes from './AppRoutes';

function App() {
	const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

	return (
		<Router>
			<div className='App'>
				<aside>
					<SideMenu
						isCollapsed={isMenuCollapsed}
						onToggleCollapse={setIsMenuCollapsed}
					/>
				</aside>

				<main
					className={`container ${isMenuCollapsed ? 'menu-collapsed' : ''}`}
				>
					<AppRoutes />
				</main>
			</div>
		</Router>
	);
}

export default App;
