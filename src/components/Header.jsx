import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3.75rem',
    padding: '1.25rem 0',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '350',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Horoscope</Link>
      <Link to="/zodiac" style={linkStyle}>Zodiac</Link>
      <Link to="/tarot" style={linkStyle}>Tarot</Link>
      <Link to="/pastlife" style={linkStyle}>Past Life</Link>
      <Link to="/divination" style={linkStyle}>Divination</Link>
    </nav>
  );
};

export default Header;