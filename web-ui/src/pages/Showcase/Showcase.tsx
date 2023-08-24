import React from "react";
import "./Showcase.scss";
import CardGrid from "../../components/CardGrid";
import ShowcaseItem from "./ShowcaseItem";
import ModelRenderer from "../../components/ModelRenderer";
interface ShowcaseProps {}
const Showcase: React.FC<ShowcaseProps> = (props) => {
  const cards = [
    {
      id: 0,
      title: "3D Scanning",
      content: (
        <div>
          <p>TODO</p>
          <p>References</p>
        </div>
      ),
    },

    {
      id: 1,
      title: "3D Printed Game Console",
      content: (
        <div>
          <ModelRenderer filePath="/3D-Models/GameConsole.glb" />
          <p>References</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Stirling Engine",
      content: (
        <div>
          <ModelRenderer filePath="/3D-Models/StirlingEngine.glb" />
          <p>References</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Vibration Plate",
      content: (
        <div>
          <p>TODO</p>
          <p>References</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Skateboard Brackets",
      content: (
        <div>
          <p>TODO</p>
          <p>References</p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Camera Mount",
      content: (
        <div>
          <p>TODO</p>
          <p>References</p>
        </div>
      ),
    },
  ];
  return (
    <div className="Showcase">
      <h1>Showcase</h1>
      TODO Change the pages to Home, Mechanical, Software, Blog TODO Add
      tooltips on how to use the 3d renderer.
      <CardGrid cards={cards} />
    </div>
  );
};
export default Showcase;
