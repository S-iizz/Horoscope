import React from 'react';

const IntroPage = ({ backgroundImage, title, description, buttonText, onButtonClick }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 6.25rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '3.375rem', fontWeight: 600, marginBottom: '1.25rem' }}>
        {title}
      </h1>
      <p style={{
        fontSize: '1rem',
        fontWeight: 320,
        maxWidth: '37.5rem',
        marginBottom: '2.5rem'
      }}>
        {description}
      </p>
      <button
        style={{
          padding: '0.625rem 1.25rem',
          fontSize: '1rem',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '0.75rem',
          cursor: 'pointer',
          minWidth: '10rem',
          maxWidth: '12.5rem',
          whiteSpace: 'nowrap',
        }}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default IntroPage;