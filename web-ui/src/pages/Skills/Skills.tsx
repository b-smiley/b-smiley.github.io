import React from "react";

import "./Skills.scss";
import CardGrid from "../../components/CardGrid";
interface SkillsProps {}
const Skills: React.FC<SkillsProps> = (props) => {
  const softwareCards = [
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
            <li>LabVIEW</li>
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

  const mechanicalCards = [
    {
      id: 1,
      title: "CAD",
      content: (
        <div>
          <ul>
            <li>Solidworks</li>
            <li>Fusion 360</li>
            <li>VX Model</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "3D Technologies",
      content: (
        <div>
          <ul>
            <li>3D Scanning</li>
            <li>3D Printing</li>
            <li>3D Modeling</li>
            <li>CAD Simulations</li>
            <li>3D Software Development</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="Skills">
      <div id="software-section">
        <h1>Software</h1>
        <CardGrid cards={softwareCards} />
      </div>

      <div id="mechanical-section">
        <h1>Mechanical</h1>
        <CardGrid cards={mechanicalCards} />
      </div>
    </div>
  );
};
export default Skills;
