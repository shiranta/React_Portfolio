import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/shirantha.fonseka.7/"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/anton-fonseka-770b521b8/"><LinkedInIcon /></a>
        <a href="https://github.com/shiranta"><GitHubIcon/></a>
      </div>
      <p> &copy; 2026 shirantha.fonseka97@gmail.com</p>
    </div>
  );
}

export default Footer;

