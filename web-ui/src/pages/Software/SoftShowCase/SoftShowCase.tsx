import React from "react";
import "./SoftShowCase.scss";
import CardGrid from "../../../components/CardGrid";
import InfoCard from "../../../components/InfoCard";

interface SoftShowCaseProps {}
const SoftShowCase: React.FC<SoftShowCaseProps> = (props) => {
  const projectCards = [
    {
      id: 0,
      title: "Art Museum Database Management System",
      content: (
        <div className="software-card">
          {/* Add  a GIF */}
          <img
            src={"./Software_Projects/lookup.gif"}
            alt=""
            className="card-visual"
            style={{ width: "100%" }}
          />
          <InfoCard
            subTitle="Database Management System"
            description="A database management system for an art museum. The system was created using MySQL as the database, Python (EEL) as a backend, and HTML, CSS, Javascript as a frontend.
            Additionally, an EERD diagram and relational schema diagram  were created to model the database. 
            The muesum application had a login system that would allow users to have different permissions. For example, a guest could only view the database 
            while a data entry user could add, edit, and delete from the database. There was also a admin user that could add, edit, and delete users. Depending on the user privileges, the system would display different options on the side panel.
            As seen in the GIF, having a 'canned transactions lookup' page was one of the features that a guest or data entry user could use to view the database. 
            These canned transactions required correct SQL querys. If the canned transaction had multiple checkboxes selected (Ex. Artist and Art Objects) the query would have to avoid a cartesian cross product, as the result intuitively should only return art objects related artists."
            skills={{
              MySQL: ["mysql", "MySQL"],
              Python: ["python", "Python"],
              HTML: ["html", "HTML"],
              CSS: ["css", "CSS"],
              Javascript: ["javascript", "Javascript"],
              EERD: ["eer", "EERD"],
            }}
            through={["UofC", "Database Course"]}
          />
        </div>
      ),
    },
    {
      id: 1,
      title: "Zombie Survival",
      content: (
        <div className="software-card">
          {/* Add a youtube video */}
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/-jpqB_LbVxQ?si=6Uk6szTGzxEI4TxY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="card-visual"
          ></iframe>

          <InfoCard
            subTitle="2D Shooter Game"
            description="A 2D shooter game where you have to survive waves of zombies. The game was created using Python and Pygame.
            This game was made in 2022 and I still like to showcase it to show how much I have improved since then. It was my first attempt at building something from scratch. Overall, I learnt more about Object Oriented Programming (OOP) and how to use library documentations. The game uses the WASD keys to move and the mouse click to shoot in the direction of the gun. The user can reload by pressing R. I did the art myself using Procreate (Which is why it looks so bad 😂😬). Additionally, the music and sound effects were made in garage band. The hardest part of the project (at the time) was developing the music class as I wanted to be able to play music while hearing the gun sound affects. This prooved to be difficult at first to run them both at the same time."
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
      id: 2,
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
      id: 3,
      title: "Schulich Ignite",
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
            href="https://schulichignite.com/authors/brendan-smiley/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blog
          </a>
        </div>
      ),
    },
    {
      id: 4,
      title: "Portfolio Website",
      content: (
        <div className="software-card">
          <InfoCard
            subTitle="Personal Website"
            description="This website was made to showcase my projects and skills. The website was created on GitHub Pages using React and Typescript. I would also like to state that this site is a constant work in progress. I am always trying to improve it and add new features. 
            Thank you GitHub for providing this service!"
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
  ];
  return (
    <div className="SoftShowCase">
      <CardGrid cards={projectCards} cardsPerRow={[1, 2]} />
    </div>
  );
};
export default SoftShowCase;
