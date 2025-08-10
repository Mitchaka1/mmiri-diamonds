import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Mmiri Diamonds. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
