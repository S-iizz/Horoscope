import React from 'react';
import background from '../images/bg-black.png';

const ResultWrapper = ({ image, title, subtitle, description }) => {
  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <div style={styles.left}>
          {typeof image === 'string' ? (
            <img src={image} alt="illustration" style={styles.image} />
          ) : (
            image
          )}
        </div>
        <div style={styles.right}>
          <h1 style={styles.title}>{title}</h1>
          <h2 style={styles.subtitle}>{subtitle}</h2>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    minHeight: 'calc(100vh - 7.5rem)',
    padding: '5rem 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12.5rem',
    maxWidth: '68.75rem',
    width: '100%',
    alignItems: 'center',
  },
  left: {
    flex: '1 1 50%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '28.75rem',
    height: 'auto',
  },
  right: {
    flex: '1 1 50%',
    textAlign: 'left',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.25rem',
  },
  subtitle: {
    fontSize: '1.75rem',
    fontWeight: '300',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#ccc',
  },
};

export default ResultWrapper;