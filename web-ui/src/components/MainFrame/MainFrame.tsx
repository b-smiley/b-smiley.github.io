/*
The main frame of the website. This frame has the general layout of the website.
*/

import React from "react";

// Pages
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Showcase from "../../pages/Showcase/Showcase";
// Components and Styles
import "./MainFrame.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

// TODO make individual pages for each of these

interface MainFrameProps {}
const MainFrame: React.FC<MainFrameProps> = (props) => {
  // Links
  const navItems = [
    { label: "Home", path: "/", component: Home },
    { label: "Showcase", path: "/showcase", component: Showcase },
    { label: "Skills", path: "/skills", component: Skills },
    { label: "About", path: "/about", component: About },
  ];

  return (
    <div className="MainFrame">
      <NavigationBar navItems={navItems} />
    </div>
  );
};
export default MainFrame;
