import React from "react";
import "./CardGrid.scss";

interface Card {
  id: number;
  title: string;
  content: React.ReactNode;
  className?: string; // Optional additonal classes
}

interface CardGridProps {
  cards: Card[];
}
const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className={`Card ${card.className || "card"}`} key={card.id}>
          <h2 className={"card-title"}>{card.title}</h2>
          <div className="card-content">{card.content}</div>
        </div>
      ))}
    </div>
  );
};
export default CardGrid;
