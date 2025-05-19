import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Componets/Styles/Home.css";
import Pic from "../Assets/Images/pic.png";


function Home() {

  return (
    <div className="home">
      
      <div className="about">

      <div class="quarter-page">
      <img src={Pic} alt="Rounded Image" class="rounded-image"/>
  
    </div>

        <h2> Hi, My Name is Anton!</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating Web & Mobile Apps.</p>
          <a href="www.linkedin.com/in/anton-fonseka-770b521b8"><LinkedInIcon /></a>
          <EmailIcon />
          <GitHubIcon />
        </div>
      
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
