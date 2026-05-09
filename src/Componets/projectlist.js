  import React from 'react';
  import './Styles/ProjectList.css';
  import portfolio from './Pic/portfolio.png';
  import Insuarance from './Pic/Insurance.png';
  import cric from './Pic/cric.png';
  import electo from './Pic/electro.png';
  import excel1 from './Pic/excel1.png';
  import excel2 from './Pic/excel2.png';
  import recover from './Pic/recover.png';
  import drive from './Pic/drive.png';
  import fruit from './Pic/fruitdash.png';
  import payroll from './Pic/payroll.png';
   import deskinventory from './Pic/deskinventory.png';
    import excelinventory from './Pic/excelinventory.png'; // Adjust the path if needed

  const projects = [
    { title: 'Portfolio Website', description: 'My personal portfolio built with React.', image: portfolio, url: 'https://github.com/shiranta/React_Portfolio.git' },
    { title: 'Prisum Insurance', description: 'Prism Insurance is a data analytics project that transforms raw insurance data from MS SQL Server into meaningful insights using Power Query and interactive Power BI dashboards for claims, revenue, policies, and customer analysis.', image: Insuarance, url: 'https://github.com/shiranta/Insurance-Data-Analysis-Project' },
    { title: 'ESPN-Cricket-Dashboard', description: 'This dashboard is maid to Analyze Sri Lanka Cricket Stats. I built an ESPN Cricket Power BI Dashboard using publicly available cricket statistics from the ESPN Cricinfo Statsguru database.', image: cric, url: 'https://github.com/shiranta/ESPN-Cricket-Dashboard' },
    { title: 'ElectroHub-Dashboard', description: 'Electro Hub is an end-to-end Power BI dashboard project that uses Power Query and DAX to transform raw retail data into actionable sales and profit insights.', image:electo , url: 'https://github.com/shiranta/ElectroHub-Dashboard' },
    { title: 'Excel Dashboard1', description: 'My first project is an Excel Dashboard designed to analyze and visualize key business data using PivotTables, charts, and formulas, providing clear insights into trends, performance, and decision-making metrics.', image: excel1, url: 'https://github.com/shiranta/Excel-Dashboard1' },
    { title: 'Excel Dashboard2', description: 'An interactive Excel Dashboard project built using PivotTables, charts, formulas, and slicers to analyze business data dynamically and provide clear insights into performance, trends, and key metrics.', image: excel2, url: 'https://github.com/shiranta/Excel-Dashboard2' },
    { title: 'Recover Smart', description: 'A smart recovery app for managing and tracking recovery progress of patients.', image: recover, url: 'https://github.com/shiranta/Fanshawe_Capstone_Proj' },
    { title: 'Drivago', description: 'Drivago is an Android learning application developed during my second year at university to support driving education through interactive lessons, tutorials, and progress tracking features for learners.', image: drive, url: 'https://github.com/shiranta/MAD_Project' },
    { title: 'Fruit Selling Sales Dashboard', description: 'A dashboard for analyzing fruit sales data.', image: fruit, url: 'https://github.com/shiranta/Fruit-Selling-Dashboard.' },
    { title: 'Payroll System', description: 'A Payroll Management System developed as a group project at Fanshawe College using Python and Python UI libraries to manage employee payroll operations through an interactive and user-friendly interface.', image: payroll, url: 'https://github.com/shiranta/Python_PayrollSystem' },
    { title: 'Desktop Inventory App', description: 'An Inventory Management System developed as a C# Windows desktop application to manage products, suppliers, sales, purchases, and stock levels through an interactive and user-friendly  interface.', image: deskinventory, url: 'https://github.com/shiranta/DeskTopInventory/tree/master' },
    { title: 'Excel Inventory Management System', description: 'An Excel-based inventory management system for tracking and analyzing paint inventory data.', image: excelinventory, url: 'https://github.com/shiranta/Excel-Inventory-System' },
    
  ];

  export default function ProjectList() {
    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
    <img src={project.image} alt={project.title} />
  </a>
  <h3>{project.title}</h3>
  <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
