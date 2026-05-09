import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Componets/Styles/Home.css";
import pic1 from "../Assets/Images/pic4.png";


function Home() {

  return (
    <div className="home">
      
      <div className="about">

      <div class="quarter-page">
      <img src={pic1} alt="Rounded Image" class="rounded-image"/>
  
    </div>

        <h2 className="name"> Hi, My Name is Anton!</h2>
        <div className="prompt">
          <p>Data Analytics and Data Engineering enthusiast with a Software Development background.


</p>
          <a href="https://www.facebook.com/shirantha.fonseka.7/"><FacebookIcon /></a>
          <a href="https://www.linkedin.com/in/anton-fonseka-770b521b8/"><LinkedInIcon /></a>
          <a href="https://github.com/shiranta"><GitHubIcon/></a>
        </div>
      
      </div>
      <div className="skills">
        <h1> Top Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Top Data Analytics skills</h2>
            <span>
              SQL, Excel, Power BI, Tableau, Python, Data Cleaning, Data Transformation, Statistics, Data Analytics, Data Visualization, Problem Solving, Communication Skills, Database Management, MySQL, PostgreSQL, SQL Server, ETL, Data Processing, Business Intelligence (BI), Dashboard Development, KPI Reporting, Critical Thinking, Azure, AWS, Snowflake
            </span>
          </li>
          <li className="item">
            <h2>Tools and Technologies</h2>
            <span>
              Python, SQL, R, Excel, Power BI, Tableau, MySQL, PostgreSQL, SQL Server, Pandas, NumPy, Matplotlib, Jupyter Notebook, Snowflake, Azure, AWS, Apache Spark, ETL Tools, Git, Microsoft Fabric

            </span>
          </li>
          <li className="item">
            <h2>Top Software Development Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
