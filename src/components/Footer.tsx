import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Arindam Ghosh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;