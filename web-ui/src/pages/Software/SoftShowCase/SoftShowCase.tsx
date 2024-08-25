import React, { useState } from "react";
import "./SoftShowCase.scss";
import CardGrid from "../../../components/CardGrid";
import InfoCard from "../../../components/InfoCard";

const getHTMLContent = async () => {
  // Fetch the html content of the drawio.html file
  const path = "./Software_Projects/DisasterReliefSystem.html";
  let response = await fetch(path);
  let data = await response.text();
  return data;
};

interface SoftShowCaseProps {}
const SoftShowCase: React.FC<SoftShowCaseProps> = (props) => {
  const [srcDoc, setSrcDoc] = useState<string>("");
  getHTMLContent().then((data) => setSrcDoc(data));

  const projectCards = [
    {
      id: 0,
      title: "Data Acquisition Desktop Application",
      content: (
        <div className="software-card">
          <img
            src={"./Software_Projects/50sps.gif"}
            alt=""
            className="card-visual"
            style={{ width: "100%" }}
          />
          <img
            src={"./Software_Projects/8ksps.gif"}
            alt=""
            className="card-visual"
            style={{ width: "100%" }}
          />
          <InfoCard
            subTitle="Real Time Data Acquisition using SPI communication"
            description="Built a desktop application that acquires voltage data from a filtering device 
            using Serial Peripheral Interface (SPI). The application was created using LabVIEW. 
            The application had a Graphical User Interface (GUI) that allowed the
             user to select device settings (which were configurable through register writes) and then start data acquisition.
            The application would export the data to a csv file.
            This was a interesting application to build because I was tasked with the entire project; from writing 1's and 0's into registers, all the way up to a GUI. 
            I had to be mindful of proper abstraction and encapsulation to ensure that the project was maintainable and scalable. 
            Additionally, I had to learn SPI communication on the fly so it was quite rewarding to problem solve a real world application I didn't understand, 
            with my foundational university knowledge. 
            What can be seen in the GIFs an oscilloscope probing the SPI lines.
            The first GIF shows a slower sampling rate while the second GIF shows a faster sampling rate. The blue line is the serial clock signal, the green line is the data out signal, and the
            red line is the data ready (DRDY) signal. 
            The DRDY signal is used to tell the microcontroller that the data is ready to be read.
             DRDY is a crucial signal to ensure that the data is being read in time before the next sample, and is not a garbage value. The SPI communication protocol 
            is a fascinating topic and I will be posting a blog post about it in the future so look out for that! 
             "
            skills={{
              LabVIEW: ["labview", "LabVIEW"],
              SPI: ["spi", "SPI"],
            }}
            through={[]}
          />
        </div>
      ),
    },
    {
      id: 1,
      title: "Disaster Relief System",
      content: (
        <div>
          {/* Include drawio.html */}
          <iframe
            title="Disaster Relief System"
            className={"drawio"}
            style={{ backgroundColor: "white", width: "100%" }}
            srcDoc={srcDoc}
          ></iframe>
          <InfoCard
            subTitle="Disaster Relief System using Java and JUnit"
            description="For a object orientated programming course, I was tasked with creating a disaster relief system. The system had to be able to add, remove, and search for victims and their related information. 
          Some of the related information was a victim's medical records, location, and family members. 
          The business logic was created with Java, and JUnit was used for testing. Learning about unit testing was a game changer for me, finding edge cases in a automated test helps remove potential bugs in the future. The course required the creation of UML diagrams as well which taught me how to properly design a system before coding. 
          The UML diagram provided wasn't the final implementation but it provides a good idea of how the system was designed. Feel free to zoom in or click on the diagram to see it in more detail."
            skills={{
              Java: ["java", "Java"],
              JUnit: ["junit", "JUnit"],
              JavaSwing: ["javaswing", "Java Swing"],
              UML: ["uml", "UML Designing"],
            }}
            through={["UofC", "OOP Course"]}
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Art Museum Database Management System",
      content: (
        <div className="software-card">
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
            The museum application had a login system that would allow users to have different permissions. For example, a guest could only view the database 
            while a data entry user could add, edit, and delete from the database. There was also a admin user that could add, edit, and delete users. Depending on the user privileges, the system would display different options on the side panel.
            As seen in the GIF, having a 'canned transactions lookup' page was one of the features that a guest or data entry user could use to view the database. 
            These canned transactions required correct SQL query. If the canned transaction had multiple checkboxes selected (Ex. Artist and Art Objects) the query would have to avoid a cartesian cross product, as the result intuitively should only return art objects related artists."
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
      id: 3,
      title: "Zombie Survival",
      content: (
        <div className="software-card">
          {/* Add a youtube video */}
          <iframe
            width="90%"
            height="400px"
            src="https://www.youtube.com/embed/-jpqB_LbVxQ?si=6Uk6szTGzxEI4TxY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="card-visual"
          ></iframe>

          <InfoCard
            subTitle="2D Shooter Game"
            description="A 2D shooter game where you have to survive waves of zombies. The game was created using Python and PyGame.
            This game was made in 2022 and I still like to showcase it to show how much I have improved since then. It was my first attempt at building something from scratch. Overall, I learnt more about Object Oriented Programming (OOP) and how to use library documentations. The game uses the WASD keys to move and the mouse click to shoot in the direction of the gun. The user can reload by pressing R. I did the art myself using Procreate (Which is why it looks so bad 😂😬). Additionally, the music and sound effects were made in garage band. The hardest part of the project (at the time) was developing the music class as I wanted to be able to play music while hearing the gun sound affects. This prooved to be difficult at first to run them both at the same time."
            skills={{
              Python: ["python", "Python"],
              Pygame: ["PyGame", "PyGame"],
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
      id: 4,
      title: "Mini Indoor Garden",
      content: (
        <div className="software-card">
          <InfoCard
            subTitle="Automated Gardening System"
            description="A system that automatically waters plants and provides them with adequate light during the day. 
            Plants need a rest too! The system would ensure that the LED grow lights only turned on during the day and would turn off if their was enough natural sunlight.
            Additionally, the system had a lower reservoir detection that would flash the LEDs at the user until the reservoir was refilled.
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
      id: 5,
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
      id: 6,
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
