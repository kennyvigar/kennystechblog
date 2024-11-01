import React from 'react';
import './App.css';

function Footer() {
const currentYear = new Date().getFullYear();


  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {currentYear}</p>
        <p>dOnT fOrGeT tO lIeK aNd SuBsCrIbE</p>
      </div>
    </footer>
  );
}

export default Footer;
