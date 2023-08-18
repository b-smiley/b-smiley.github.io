import React from "react";
import "./Skills.scss";
import CardGrid from "../../components/CardGrid";
interface SkillsProps {}
const Skills: React.FC<SkillsProps> = (props) => {
  const cards = [
    {
      id: 1,
      title: "Languages",
      content: (
        <div>
          <ul>
            <li>Python</li>
            <li>TypeScript</li>
            <li>VBA</li>
            <li>Arduino C</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "Frameworks",
      content: (
        <div>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Electron</li>
            <li>Flask</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "APIs",
      content: (
        <div>
          <ul>
            <li>Google</li>
            <li>Fusion 360</li>
            <li>Accelo</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="Skills">
      <div id="software-section">
        <h1>Software</h1>
        <CardGrid cards={cards} />
      </div>

      <div id="mechanical-section">
        <h1>Mechanical</h1>
        <CardGrid cards={cards} />
      </div>
    </div>
  );
};
export default Skills;
