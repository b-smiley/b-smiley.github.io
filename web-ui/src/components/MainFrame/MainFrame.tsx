/*
The main frame of the website. This frame has the general layout of the website.
*/

import React from "react";

// Pages
import Home from "../../pages/Home/Home";
// Components and Styles
import "./MainFrame.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer";
import Mechanical from "../../pages/Mechanical";
import Software from "../../pages/Software";

// TODO make individual pages for each of these

interface MainFrameProps {}
const MainFrame: React.FC<MainFrameProps> = (props) => {
  // Links
  const navItems = [
    { label: "Home", path: "/", component: Home },
    { label: "Mechanical", path: "/mechanical", component: Mechanical },
    { label: "Software", path: "/software", component: Software },
  ];

  return (
    <div className="MainFrame">
      <NavigationBar navItems={navItems} />
      <Footer />
    </div>
  );
};
export default MainFrame;
