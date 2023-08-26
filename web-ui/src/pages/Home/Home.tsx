import React from "react";
import "./Home.scss";
interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="Home">
      <div className="intro">
        <div className="name">
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
