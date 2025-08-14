import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { NAV_ROUTES } from './nav.constants';

function SideMenu() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const getLinkClass = ({ isActive }) => {
		return `nav-link ${isActive ? 'active' : ''}`;
	};

	return (
		<div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
			<button
				className='collapse-btn'
				onClick={() => setIsCollapsed(!isCollapsed)}
				aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
			>
				{isCollapsed ? '→' : '←'}
			</button>
			{NAV_ROUTES.map((route) => (
				<NavLink key={route.path} to={route.path} className={getLinkClass}>
					{route.label}
				</NavLink>
			))}
		</div>
	);
}

export default SideMenu;
