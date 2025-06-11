import React from 'react';
import background from '../images/bg-black.png';

const PageWrapper = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 7.5rem)',
    padding: '2.5rem 0 0 0',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '8.125rem',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    maxWidth: '62.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
  },
};

export default PageWrapper;
