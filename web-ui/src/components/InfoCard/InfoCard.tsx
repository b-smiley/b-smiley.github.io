import React from "react";
import "./InfoCard.scss";
import HighlightLink from "../HighlightLink";
interface InfoCardProps {
  subTitle: string;
  description: string;
  photo?: string;
  skills: { [key: string]: string[] };
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
      <div className="InfoCard__through">
        {/* Reference to thoughs who this project was through */}
        <h4>Through:</h4>
        <ul>
          {through.map((through) => (
            <li>{through}</li>
          ))}
        </ul>
        <div className="InfoCard__skills">
          <h4>Skills</h4>
          {/* Reference to skills used in this project */}
          <ol className="InfoCard__skills__list">
            {Object.keys(skills).map((skill) => (
              <li>
                <HighlightLink
                  to={skills[skill][0]}
                  text={skill}
                  highlight={skills[skill][1]}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
