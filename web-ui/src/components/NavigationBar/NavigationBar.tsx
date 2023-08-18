import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./NavigationBar.scss";

interface NavItem {
  label: string;
  path: string;
  component: React.ComponentType<any>;
}

interface NavigationBarProps {
  navItems: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ navItems }) => {
  return (
    <div>
      <BrowserRouter>
        <nav className="NavigationBar">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.label}</Link>
            </div>
          ))}
        </nav>
        <div className="Content">
          <Routes>
            {navItems.map((item, index) => (
              // Display the component for each route the components with be imported dynamically
              <Route
                key={index}
                path={item.path}
                element={<item.component />}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default NavigationBar;
