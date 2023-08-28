import React from "react";
import "./SoftShowCase.scss";
import CardGrid from "../../../components/CardGrid";
import InfoCard from "../../../components/InfoCard";
interface SoftShowCaseProps {}
const SoftShowCase: React.FC<SoftShowCaseProps> = (props) => {
  const projectCards = [
    {
      id: 0,
      title: "Zombie Survival",
      content: (
        <div>
          <InfoCard
            subTitle="2D Shooter Game"
            description="A 2D shooter game where you have to survive waves of zombies. The game was created using Python and Pygame."
            skills={{
              Python: ["python", "Python"],
              Pygame: ["pygame", "Pygame"],
            }}
            through={[]}
          />
        </div>
      ),
    },
    {
      id: 1,
      title: "Mini Indoor Garden",
      content: (
        <div>
          <InfoCard
            subTitle="Automated Gardening System"
            description="A system that automatically waters plants and provides them with adequate light during the day. 
            Plants need a rest too! The system would ensure that the LED grow lights only turned on during the day and would turn off if their was enough natural sunlight.
            Additonally the system had a lower reservoir detection that would flash the LEDs at the user until the reservoir was refilled.
            The system was created using an Arduino Uno and 3D Printing."
            skills={{
              "Arduino C": ["arduinoc", "Arduino C"],
              "3D Printing": ["3dprinting", "3D Printing"],
            }}
            through={[]}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="SoftShowCase">
      <CardGrid cards={projectCards} cardsPerRow={[1, 2]} />
    </div>
  );
};
export default SoftShowCase;
