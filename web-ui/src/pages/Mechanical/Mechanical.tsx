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
            <li id="solidworks">Solidworks</li>
            <li id="fusion360">Fusion 360</li>
            <li id="vxmodel">VX Model</li>
            <li id="reverseengineering">Reverse Engineering</li>
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
            <li id="3dscanning">3D Scanning</li>
            <li id="3dprinting">3D Printing</li>
            <li id="3dmodeling">3D Modeling</li>
            <li id="cadsimulations">CAD Simulations</li>
            <li id="3dcadprogramming">3D CAD Programming</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Manufacturing Processes",
      content: (
        <div>
          <ul>
            <li id="cnc">CNC</li>
            <li id="lathes">Lathes</li>
            <li id="3dprinting">3D Printing</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="Mechanical">
      {/* Showcase Section */}
      <MechShowcase></MechShowcase>
      {/* Skills Section */}
      <h1>Skills</h1>
      <CardGrid cards={cards} cardsPerRow={[1, 3]} />
    </div>
  );
};
export default Mechanical;
