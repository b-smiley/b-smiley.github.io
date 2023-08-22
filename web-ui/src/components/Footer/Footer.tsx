import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.scss";
interface FooterProps {}
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="Footer">
      <div className="social-links">
        <a
          href="https://github.com/b-smiley"
          target="_blank"
          rel="nopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/brendan-s-9703ba193/"
          target="_blank"
          rel="nopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
