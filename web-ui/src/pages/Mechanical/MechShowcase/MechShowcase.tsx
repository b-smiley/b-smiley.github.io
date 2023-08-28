import React from "react";
import "./MechShowcase.scss";
import CardGrid from "../../../components/CardGrid";
import ModelRenderer from "../../../components/ModelRenderer";
import InfoCard from "../../../components/InfoCard";

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
          <ModelRenderer filePath="./3D-Models/StirlingEngine.glb" scale={1} />
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
            }}
            through={["SAIT", "SolidWorks"]}
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Retro Game Console",
      content: (
        <div>
          <ModelRenderer
            filePath="./3D-Models/RetroGameConsole.glb"
            scale={0.01}
          />
          <InfoCard
            subTitle="Model, Fabrication, and Assembly"
            description="
            In one of my engineering design classes, we were tasked with creating a retro game console.
            I was in charge of the CAD modeling, 3D printing, and assembly of the console.
            "
            skills={{
              "3D Modeling": ["3dmodeling", "3D Modeling"],
              "CAD Assembly": ["3dmodeling", "3D Modeling"],
              "3D Printing": ["3dprinting", "3D Printing"],
            }}
            through={[]}
            /// through={["University of Calgary", "Fusion 360"]}
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Vibration Plate",
      content: (
        <div>
          <ModelRenderer
            filePath="./3D-Models/VibrationPlate.glb"
            scale={0.01}
          />
          <InfoCard
            subTitle="Model"
            description="
            Was used for vibration testing a product. The product would be mounted to this plate and then the plate would be shaked on a 
            vibration testing machine. Normally with products, you want to ensure that there are fillets or chamfers on corners.
            However as this was just for engineering testing, fillets and chamfers would just be added costs.
            "
            skills={{
              "3D Modeling": ["3dmodeling", "3D Modeling"],
            }}
            through={["SolidWorks", "SCT"]}
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "Skateboard Wall Mounts",
      content: (
        <div>
          <ModelRenderer
            filePath="./3D-Models/SkateboardBracket.glb"
            scale={0.01}
          />
          <InfoCard
            subTitle="Model, Fabrication, and Assembly"
            description="
            I wanted to use my old skateboards as shelves. However, I couldn't find a wall mount that fit skateboards well.
            I decided to design my own wall mount that would fasten through the truck holes.
            The wall mounts were made in Solidworks and 3D printed.
            "
            skills={{
              "3D Modeling": ["3dmodeling", "3D Modeling"],
              "3D Printing": ["3dprinting", "3D Printing"],
            }}
            through={["SolidWorks", "Personal Project"]}
          />
        </div>
      ),
    },
    // {
    //   id: 6,
    //   title: "Camera Mount",
    //   content: <div>3D Printer</div>,
    // },
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
