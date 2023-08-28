import React from "react";
import "./Software.scss";
import CardGrid from "../../components/CardGrid";
import SoftShowCase from "./SoftShowCase";
interface SoftwareProps {}
const Software: React.FC<SoftwareProps> = (props) => {
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

  return (
    <div className="Software">
      {/* Showcase Section */}
      <h1>Showcase</h1>
      <SoftShowCase />
      {/* Skills Section */}
      <h1>Skills</h1>
      <CardGrid cards={cards} cardsPerRow={[1, 3]} />
    </div>
  );
};
export default Software;
