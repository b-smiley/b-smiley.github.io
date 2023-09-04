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
        <div className="software-card">
          <InfoCard
            subTitle="2D Shooter Game"
            description="A 2D shooter game where you have to survive waves of zombies. The game was created using Python and Pygame."
            skills={{
              Python: ["python", "Python"],
              Pygame: ["pygame", "Pygame"],
            }}
            through={[]}
          />

          <a
            href="https://github.com/b-smiley/ZombieSurvival"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
        </div>
      ),
    },
    {
      id: 1,
      title: "Mini Indoor Garden",
      content: (
        <div className="software-card">
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
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a> */}
        </div>
      ),
    },
    {
      id: 2,
      title: "Portfolio Website",
      content: (
        <div className="software-card">
          <InfoCard
            subTitle="Personal Website"
            description="A website to showcase my projects and skills. The website was created on GitHub Pages using React and Typescript. Thank you GitHub for providing this service!"
            skills={{
              React: ["react", "React"],
              Typescript: ["typescript", "Typescript"],
            }}
            through={[]}
          />
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a> */}
        </div>
      ),
    },
    {
      id: 3,
      title: "Schulich Ignite Blog",
      content: (
        <div className="software-card">
          <InfoCard
            subTitle="Student Mentoring and Blogging"
            description="A University of Calgary club that helps students learn programming. I was a mentor for the club and wrote blog posts about a variety of software topics."
            skills={{
              Markdown: ["markdown", "Markdown"],
              VBA: ["vba", "VBA"],
              Python: ["python", "Python"],
            }}
            through={["Schulich Ignite"]}
          />
          <a
            href="https://schulichignite.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blog
          </a>
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
