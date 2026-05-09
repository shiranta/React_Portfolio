import React from 'react';
import '../Componets/Styles/Contact.css'; // Adjust the path if needed

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p><strong>Email:</strong> anton.fonseka97@gmail.com</p>
        <p><strong>Phone:</strong> 2269779440</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/anton-fonseka-770b521b8/" target="_blank" rel="noreferrer">anton-fonseka</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/shiranta/" target="_blank" rel="noreferrer">shiranta</a></p>
      </div>

      <form 
        action="https://formspree.io/f/mqaqogpz" 
        method="POST" 
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
