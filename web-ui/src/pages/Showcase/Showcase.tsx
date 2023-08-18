import React from "react";
import "./Showcase.scss";
import CardGrid from "../../components/CardGrid";
import ModelRenderer from "../../components/ModelRenderer";
interface ShowcaseProps {}
const Showcase: React.FC<ShowcaseProps> = (props) => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: (
        <div>
          <ModelRenderer />
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
