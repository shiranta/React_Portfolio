import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <LinkedInIcon />
        <WhatsAppIcon/>
        <GitHubIcon/>
      </div>
      <p> &copy; 2025 shirantha.fonseka97@gmail.com</p>
    </div>
  );
}

export default Footer;

