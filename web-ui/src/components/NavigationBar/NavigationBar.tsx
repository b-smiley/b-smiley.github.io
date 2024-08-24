import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./NavigationBar.scss";
import FullScreenModel from "../../pages/FullScreenModel";
import { AnalyticsTracker, handleAcceptCookie } from "../../utils/analytics";
import CookieConsent from "react-cookie-consent";

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
        <AnalyticsTracker />
        <CookieConsent
          buttonText="I understand"
          style={{ background: "#d04dc9" }}
          buttonStyle={{
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "13px",
          }}
          onAccept={handleAcceptCookie}
          location="bottom"
          overlay
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <nav className="NavigationBar">
          {navItems.map((item, index) => (
            <Link className={"nav-link"} key={index} to={item.path}>
              {item.label}
            </Link>
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
            {/* Non-Nav Bar Routes */}
            <Route path="/model-viewer" element={<FullScreenModel />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default NavigationBar;
