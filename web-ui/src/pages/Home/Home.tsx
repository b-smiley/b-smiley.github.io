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
      setNameSize("45px");
    } else {
      setNameSize("50px");
    }
  }, []);

  // Listen for  window resizing and change the font size of the name
  useEffect(() => {
    const handleResize = () => {
      if (deviceType() === "mobile") {
        setNameSize("45px");
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
            Mechanical Engineering Technologist, Software Engineering Student.
          </span>
        </div>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <p>
          Currently in Canada getting a Bachelors Degree in Software
          Engineering. Experienced in both software and mechanical engineering.
          Started engineering related design work {experience} years ago.
          Passionate about automating tasks that will save people time.
        </p>
      </div>
    </div>
  );
};
export default Home;
