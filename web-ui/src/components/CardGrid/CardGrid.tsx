/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./CardGrid.scss";
import deviceType from "../../utils/windowSize";
interface Card {
  id: number;
  title: string;
  content: React.ReactNode;
  className?: string; // Optional additonal classes
}

interface CardGridProps {
  cards: Card[];
  cardsPerRow?: [mobile: number, desktop: number] | string; // For mobile and desktop
}
const CardGrid: React.FC<CardGridProps> = ({ cards, cardsPerRow = "" }) => {
  const [columns, setColumns] = useState<string | number>("");
  const gridColumnTemplate = `repeat(${columns}, 1fr)`;

  // Get the inital device size and set the columns
  useEffect(() => {
    if (!cardsPerRow) {
      setColumns("auto-fill");
      return;
    }
    if (deviceType() === "mobile") {
      setColumns(cardsPerRow[0]);
    } else {
      setColumns(cardsPerRow[1]);
    }
  }, []);

  // Listen for window resizing and change the columns
  useEffect(() => {
    const handleResize = () => {
      if (deviceType() === "mobile") {
        setColumns(cardsPerRow[0]);
      } else {
        setColumns(cardsPerRow[1]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="card-grid"
      style={{ gridTemplateColumns: gridColumnTemplate }}
    >
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
