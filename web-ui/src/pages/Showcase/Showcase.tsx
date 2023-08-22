import React from "react";
import "./Showcase.scss";
import CardGrid from "../../components/CardGrid";
import ShowcaseItem from "./ShowcaseItem";
import ModelRenderer from "../../components/ModelRenderer";
interface ShowcaseProps {}
const Showcase: React.FC<ShowcaseProps> = (props) => {
  const cards = [
    {
      id: 1,
      title: "3D Printed Game Console",
      content: (
        <div>
          <ModelRenderer filePath="/3D-Models/GameConsole.glb" />
        </div>
      ),
    },
  ];
  return (
    <div className="Showcase">
      <h1>Showcase</h1>
      <CardGrid cards={cards} />
    </div>
  );
};
export default Showcase;
