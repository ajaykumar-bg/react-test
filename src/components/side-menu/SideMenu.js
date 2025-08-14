import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { NAV_ROUTES } from './nav.constants';
import { generateAvatar } from './side-menu.utils';

function SideMenu(props) {
	const { isCollapsed, onToggleCollapse } = props;

	const getLinkClass = ({ isActive }) => {
		return `nav-link ${isActive ? 'active' : ''}`;
	};

	return (
		<div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
			<button
				className='collapse-btn'
				onClick={() => onToggleCollapse(!isCollapsed)}
				aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
			>
				{isCollapsed ? '→' : '←'}
			</button>
			<div className='nav-links'>
				{NAV_ROUTES.map((route) => (
					<NavLink key={route.path} to={route.path} className={getLinkClass}>
						{isCollapsed ? generateAvatar(route.label) : route.label}
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default SideMenu;
