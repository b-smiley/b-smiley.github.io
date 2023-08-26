import React from "react";
import "./Mechanical.scss";
import InfoCard from "../../components/InfoCard";
import MechShowcase from "./MechShowcase";
import CardGrid from "../../components/CardGrid";
interface MechanicalProps {}
const Mechanical: React.FC<MechanicalProps> = (props) => {
  const cards = [
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
    <div className="Mechanical">
      {/* Info Section */}
      <h1>Mechanical Experiences</h1>
      {/* Showcase Section */}
      <MechShowcase></MechShowcase>
      {/* Skills Section */}
      <h1>Skills</h1>
      <CardGrid cards={cards} />
    </div>
  );
};
export default Mechanical;
