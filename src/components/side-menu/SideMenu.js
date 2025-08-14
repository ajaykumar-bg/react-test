import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import { NAV_ROUTES } from "./nav.constants";

function SideMenu() {
  const getLinkClass = ({ isActive }) => {
    return `nav-link ${isActive ? "active" : ""}`;
  };

  return (
    <div className="side-menu">
      {NAV_ROUTES.map((route) => (
        <NavLink key={route.path} to={route.path} className={getLinkClass}>
          {route.label}
        </NavLink>
      ))}
    </div>
  );
}

export default SideMenu;
