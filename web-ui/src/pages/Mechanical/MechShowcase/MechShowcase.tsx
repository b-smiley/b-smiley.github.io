import React from "react";
import "./MechShowcase.scss";
import CardGrid from "../../../components/CardGrid";
import ModelRenderer from "../../../components/ModelRenderer";
import InfoCard from "../../../components/InfoCard";
import ToolTip from "../../../components/ToolTip";

interface MechShowcaseProps {}
const MechShowcase: React.FC<MechShowcaseProps> = (props) => {
  const modelCards = [
    // {
    //   id: 1,
    //   title: "3D Scanning",
    //   content: <div>3D Scanning</div>,
    // },
    {
      id: 2,
      title: "Stirling Engine",
      content: (
        <div>
          <ModelRenderer filePath="./3D-Models/StirlingEngine.glb" />
          <InfoCard
            subTitle="Model, Fabrication, and Assembly"
            description="
            Two of my courses at SAIT were dedicated to designing and fabricating a Stirling Engine. 
            The first class was to create the CAD model for the engine, while the other class was to fabricate it. 
            More specifically, we fabricated the Stirling Engine using Lathes and CNC machines.
            "
            skills={{
              "3D Modeling": ["3dmodeling", "3D Modeling"],
              "CAD Assembly": ["3dmodeling", "3D Modeling"],
              Lathe: ["lathes", "Lathes"],
              CNC: ["cnc", "CNC"],
              Thermodynamics: ["thermodynamics", "Thermodynamics"],
            }}
            through={["SAIT", "SolidWorks"]}
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Game Console",
      content: <div>Game Console</div>,
    },
    {
      id: 4,
      title: "Vibration Plates",
      content: <div>Vibration Plates</div>,
    },
    {
      id: 5,
      title: "Skateboard Wall Mounts",
      content: <div>Skateboard Wall Mounts</div>,
    },
    {
      id: 6,
      title: "Camera Mount",
      content: <div>3D Printer</div>,
    },
  ];
  return (
    <div className="MechShowcase">
      <div className="section-header">
        <h1>Showcase</h1>
      </div>

      <CardGrid cards={modelCards} cardsPerRow={[1, 2]} />
    </div>
  );
};
export default MechShowcase;
