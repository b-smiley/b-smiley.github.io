import React, { useEffect, useState } from "react";
import "./Home.scss";
import deviceType from "../../utils/windowSize";
interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  const experience = new Date().getFullYear() - 2019;

  const [nameSize, setNameSize] = useState("");
  // Get the inital device size
  useEffect(() => {
    if (deviceType() === "mobile") {
      setNameSize("40px");
    } else {
      setNameSize("50px");
    }
  }, []);

  // Listen for  window resizing and change the font size of the name
  useEffect(() => {
    const handleResize = () => {
      if (deviceType() === "mobile") {
        setNameSize("40px");
      } else {
        setNameSize("50px");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Home">
      <div className="intro">
        <div className="name" style={{ fontSize: nameSize }}>
          <h1>Brendan Smiley</h1>
        </div>
        {/* Set the style to "--n:53" */}
        <div className="typing-space">
          <span className="title" style={{ "--n": 100 } as React.CSSProperties}>
            Software Engineering Student, and Mechanical Engineering
            Technologist.
          </span>
        </div>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <p>
          I am currently in Canada completing a bachelor's degree in Software
          Engineering. I have industry experience and education in both software
          and mechanical engineering. I started started engineering-related
          design work {experience} years ago. My passion for helping solve world
          problems has driven me to always learn and grow. I am always looking
          for new opportunities, feel free to get in contact with me.
        </p>

        <p style={{ textAlign: "center" }}>
          Thank you for visiting my website. Enjoy!
        </p>
      </div>
    </div>
  );
};
export default Home;
