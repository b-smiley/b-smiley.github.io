import React from "react";
import "./MechShowcase.scss";
import CardGrid from "../../../components/CardGrid";
import ModelRenderer from "../../../components/ModelRenderer";
import InfoCard from "../../../components/InfoCard";

interface MechShowcaseProps {}
const MechShowcase: React.FC<MechShowcaseProps> = (props) => {
  const modelCards = [
    {
      id: 1,
      title: "3D Scanning",
      content: (
        <div>
          <ModelRenderer
            filePath="./3D-Models/R3D-Skull.glb"
            scale={0.01}
            autoload={true}
          />
          <InfoCard
            subTitle="Art, Inspection, and Reverse Engineering"
            description="
          I 3D scanned this skull at my internship with Rapid 3D. 
          More specifically, it was scanned with the MetraScan Black Elite which is a industry grade 3D Scanner.
          3D scanning's application ranges from art preservation to reverse engineering. 
          My favourite task with 3D scanning is extracting critical geometries for reverse engineering.
          Additionally, 3D scanning can be used to see deformations in the object for inspection purposes. 
          The applications for 3D scanning are endless and it was a new challenge every day at Rapid 3D!
          "
            skills={{
              "3D Modeling": ["3dmodeling", "3D Modeling"],
              "3D Scanning": ["3dscanning", "3D Scanning"],
              "Reverse Engineering": [
                "reverseengineering",
                "Reverse Engineering",
              ],
            }}
            through={["Rapid 3D", "Creaform"]}
          />
        </div>
      ),
    },

    {
      id: 2,
      title: "Stirling Engine",
      content: (
        <div>
          <ModelRenderer
            filePath="./3D-Models/StirlingEngine.glb"
            scale={0.1}
            autoload={true}
          />
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
            scale={0.05}
            autoload={false}
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
            autoload={false}
          />
          <InfoCard
            subTitle="Model"
            description="
            Was used for vibration testing a product. The product would be mounted to this plate and then the plate would be shook on a 
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
    // {
    //   id: 5,
    //   title: "Skateboard Wall Mounts",
    //   content: (
    //     <div>
    //       <ModelRenderer
    //         filePath="./3D-Models/SkateboardBracket.glb"
    //         scale={0.01}
    //       />
    //       <InfoCard
    //         subTitle="Model, Fabrication, and Assembly"
    //         description="
    //         I wanted to use my old skateboards as shelves. However, I couldn't find a wall mount that fit skateboards well.
    //         I decided to design my own wall mount that would fasten through the truck holes.
    //         The wall mounts were made in Solidworks and 3D printed.
    //         "
    //         skills={{
    //           "3D Modeling": ["3dmodeling", "3D Modeling"],
    //           "3D Printing": ["3dprinting", "3D Printing"],
    //         }}
    //         through={["SolidWorks", "Personal Project"]}
    //       />
    //     </div>
    //   ),
    // },
    // // {
    // //   id: 6,
    // //   title: "Camera Mount",
    // //   content: <div>3D Printer</div>,
    // // },
    // {
    //   id: 7,
    //   title: "Window Handle",
    //   content: (
    //     <div>
    //       <ModelRenderer filePath="./3D-Models/WindowHandle.glb" scale={0.01} />
    //       <InfoCard
    //         subTitle="Model, Fabrication, and Assembly"
    //         description="
    //           The window handles in my house were breaking, so I decided to reverse engineer and 3D print new ones.
    //           The handle was made in Solidworks and 3D printed.
    //           "
    //         skills={{
    //           "3D Modeling": ["3dmodeling", "3D Modeling"],
    //           "3D Printing": ["3dprinting", "3D Printing"],
    //         }}
    //       />
    //     </div>
    //   ),
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
