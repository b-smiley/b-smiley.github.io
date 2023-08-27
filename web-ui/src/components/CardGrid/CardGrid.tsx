import React, { useState, useEffect } from "react";
import "./CardGrid.scss";

interface Card {
  id: number;
  title: string;
  content: React.ReactNode;
  className?: string; // Optional additonal classes
}

interface CardGridProps {
  cards: Card[];
  cardsPerRow?: number | string;
}
const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [columns, setColumns] = useState(1);

  // We want to change the number of columns based on the screen size
  // We also want to the user of this component to be able to specify the number of columns for each screen size

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
