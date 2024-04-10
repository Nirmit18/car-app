// Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
