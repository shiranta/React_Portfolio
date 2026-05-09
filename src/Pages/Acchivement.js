import React from 'react'
import '../Componets/Styles/Acchivement.css';
import fan from './Pic/fanshawe.png'; 
import curtin from './Pic/curtin.png';
import AWS from './Pic/aws.png';
import cyber from './Pic/cyber.png';
import microsoft from './Pic/microsoft.png';
import tecsup from './Pic/tecsup.png'; 
import linkedin from './Pic/linkedin.png'; 
import ux1 from './Pic/ux1.png';
import ux2 from './Pic/ux2.png'; 
import sliit from './Pic/sliit.png';
import ol from './Pic/ol.png'; 
import al from './Pic/al.png'; 
// Adjust the path if needed
const certifications = [
  {
    name: "Fanshawe College - Computer Systems Postgraduate Certificate",
    description: "This postgraduate certificate program at Fanshawe College provided comprehensive training in computer systems, covering topics such as networking, cybersecurity, and system administration. It equipped me with the skills needed to manage and secure computer systems effectively.",
    image:fan,
    url: "https://learner.mycreds.ca/sharelink/4ce5b4fb-e58e-4433-84a3-5834a2fed550/de60954e-f6d1-4177-b95a-e0f65e328a41"
  },
  {
    name: "BSc Computer Science - Curtin University",
    description: "I earned a Bachelor of Science in Computer Science from Curtin University, where I gained a strong foundation in programming, algorithms, data structures, and software development. This degree provided me with the theoretical knowledge and practical skills necessary for a successful career in software development. ",
    image: curtin,
    url: "https://www.myequals.net/documents/71ffb246-1c20-471a-835b-9ae3c376b03d"
  },
  // ... repeat through 30
  {
    name: "AWS Certified Solutions Architect - Associate",
    description: "aws certified solutions architect associate is a certification that validates your expertise in designing and deploying scalable, highly available, and fault-tolerant systems on Amazon Web Services (AWS). It demonstrates your ability to architect and deploy secure and robust applications on AWS technologies.",
    image:AWS ,
    url: "https://www.credly.com/badges/d25495d4-90a8-4176-903d-ec54214cff67/linked_in_profile"
  },
   {
    name: "Microsoft Certified: Azure Fundamentals",
    description: "The Microsoft Certified: Azure Fundamentals certification validates foundational knowledge of cloud services and how they are provided with Microsoft Azure. It covers core Azure services, security, privacy, compliance, and pricing, making it an ideal starting point for individuals looking to build a career in cloud computing.",
    image: microsoft,
    url: "https://learn.microsoft.com/en-us/users/antonfonseka-6491/credentials/b228cfb9afaa5cc0?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    name: "Higher National Diploma in Information Technology - Sri Lanka Institute of Information Technology (SLIIT)",
    description: "The Higher National Diploma in Information Technology provides foundational knowledge and practical skills in programming, networking, database management, and software development.",

    image:sliit ,
    url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://drive.usercontent.google.com/download?id=159IiIp9FWMEnBO307gywuVme2F2WFs8O&authuser=1&acrobatPromotionSource=gdrive_chrome-search"
  },

  {
    name: "Google cybersecurity foundation certificate",
    description: "The Google Cybersecurity Foundation Certificate is a credential that validates foundational knowledge and skills in cybersecurity. It covers essential topics such as threat detection, risk management, and security best practices, providing individuals with a solid understanding of cybersecurity principles and practices.",
    image:cyber,
    url: "https://www.coursera.org/account/accomplishments/verify/48Y4KGLMN1TF"
  },
 
  // ... repeat through 30
  {
    name: "Google Technical Support Fundamentals",
    description: "The Google Technical Support Fundamentals certification is designed to validate foundational knowledge and skills in technical support. It covers topics such as troubleshooting, customer service, and system administration, providing individuals with the essential skills needed to excel in a technical support role.",
    image:tecsup ,
    url: "https://www.coursera.org/account/accomplishments/verify/X3J6QLJ34RFP"
  },
  {
    name: "LinkedIn Career Essentials in cybersecurity",
    description: "The LinkedIn Career Essentials in Cybersecurity certification is a credential that validates foundational knowledge and skills in cybersecurity. It covers essential topics such as threat detection, risk management, and security best practices, providing individuals with a solid understanding of cybersecurity principles and practices.",
    image:linkedin ,
    url: "https://www.linkedin.com/learning/certificates/2db09c1a6a676fc43ae5c266a8d72fbdf1598128c6bd1a5b212616a4ec32d26b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BlllXLI%2FuT22ASlIsswIXbA%3D%3D"
  },
  {
    name: "Google UX Design Fundamentals",
    description: "The Google UX Design Fundamentals certification is designed to validate foundational knowledge and skills in user experience design. It covers topics such as user research, wireframing, prototyping, and usability testing, providing individuals with the essential skills needed to excel in a UX design role.",
    image:ux1 ,
    url: "https://www.coursera.org/account/accomplishments/verify/S9WQE8BGQ3SQ"
  },
  {
    name: "Start the UX Design Process: Empathize, Define, and Ideate",
    description: "The Start the UX Design Process: Empathize, Define, and Ideate certification is designed to validate foundational knowledge and skills in the early stages of the UX design process. It covers topics such as user research, empathy mapping, problem definition, and ideation techniques, providing individuals with the essential skills needed to excel in the initial phases of UX design.",
    image:ux2 ,
    url: "https://www.coursera.org/account/accomplishments/verify/HNJLA7WAX2CJ"
  },
  {
    name: "General certificate of Education (GCE) Ordinary Level - Sri Lanka",
    description: "The General certificate of Education (GCE) Ordinary Level is a foundational qualification in Sri Lanka, covering core subjects and providing a strong academic base for further studies.",
    image:ol ,
    url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://drive.usercontent.google.com/download?id=1tfXdrP2mYADRLaQNyBcE1o7F2bHH12fR&authuser=1&acrobatPromotionSource=gdrive_chrome-search"
  },
  {
    name: "General certificate of Education (GCE) Advanced Level - Sri Lanka",
    description: "The General certificate of Education (GCE) Advanced Level is a foundational qualification in Sri Lanka, covering advanced subjects and providing a strong academic base for further studies.",
    image:al ,
    url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://drive.usercontent.google.com/download?id=1tfXdrP2mYADRLaQNyBcE1o7F2bHH12fR&authuser=1&acrobatPromotionSource=gdrive_chrome-search"
  },
  
];


export default function Acchivement() {
  return (
    <div>
      <h1 align="center">Certifications & Achievements</h1>
      <div className="certification-grid">
        
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <img src={cert.image} alt={cert.name} />
          <h3>{cert.name}</h3>
          <p>{cert.description}</p>
          <a href={cert.url} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      ))}
    </div>
    </div>
  )
}
