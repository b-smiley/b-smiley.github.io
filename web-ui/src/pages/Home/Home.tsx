import React from "react";
import "./Home.scss";
interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="Home">
      <div id="intro">
        <div className="name">Brendan Smiley</div>
        <div className="title">
          Software Engineering Student, Mechanical Engineering Technologist
        </div>
      </div>
    </div>
  );
};
export default Home;
