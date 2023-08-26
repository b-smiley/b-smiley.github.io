import React from "react";
import "./InfoCard.scss";
interface InfoCardProps {
  subTitle: string;
  description: string;
  photo?: string;
  skills: string[];
  through: string[];
}

/*
Shows description, photo, links to skills, and through: noun
*/
const InfoCard: React.FC<InfoCardProps> = ({
  subTitle,
  description,
  photo = "",
  skills,
  through,
}) => {
  return (
    <div className="InfoCard">
      <div className="InfoCard__subTitle">
        <h3>{subTitle}</h3>
      </div>
      <div className="InfoCard__description">{description}</div>
      <div className="InfoCard__photo">{photo}</div>
      <div className="InfoCard__skills">
        {/* Reference to skills used in this project */}
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="InfoCard__through">
        {/* Reference to thoughs who this project was through */}
        <h4>Through:</h4>
        <ul>
          {through.map((through) => (
            <li>{through}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default InfoCard;
