import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '1.875rem 2.5rem',
    textAlign: 'center',
    fontSize: '0.75rem',
    position: 'relative',
    zIndex: 1000,
  };

  return (
    <footer style={footerStyle}>
      <div>© 2025 운세의 정석. All rights reserved.</div>
    </footer>
  );
};

export default Footer;