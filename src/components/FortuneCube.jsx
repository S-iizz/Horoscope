import React from 'react';

const cubeSize = '7.5rem';

const FortuneCube = ({ onClick }) => {
  return (
    <div style={styles.scene} onClick={onClick}>
      <div style={styles.cube} className="cube">
        <div style={{ ...styles.face, ...styles.front }}></div>
        <div style={{ ...styles.face, ...styles.back }}></div>
        <div style={{ ...styles.face, ...styles.right }}></div>
        <div style={{ ...styles.face, ...styles.left }}></div>
        <div style={{ ...styles.face, ...styles.top }}></div>
        <div style={{ ...styles.face, ...styles.bottom }}></div>
      </div>

      <style>{`
        .cube {
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(20deg);
          animation: rotateCube 6s infinite linear;
        }

        @keyframes rotateCube {
          0% { transform: rotateX(-20deg) rotateY(0deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  scene: {
    width: cubeSize,
    height: cubeSize,
    margin: '0 auto 2.5rem',
    perspective: '50rem',
    cursor: 'pointer',
  },
  cube: {
    position: 'relative',
    width: cubeSize,
    height: cubeSize,
    transformStyle: 'preserve-3d',
    transition: 'transform 1s',
  },
  face: {
    position: 'absolute',
    width: cubeSize,
    height: cubeSize,
    background: '#1a1a1a',
    border: '0.125rem solid #555',
    borderRadius: '0.5rem',
  },
  front: {
    transform: `translateZ(3.75rem)`
  },
  back: {
    transform: `rotateY(180deg) translateZ(3.75rem)`
  },
  right: {
    transform: `rotateY(90deg) translateZ(3.75rem)`
  },
  left: {
    transform: `rotateY(-90deg) translateZ(3.75rem)`
  },
  top: {
    transform: `rotateX(90deg) translateZ(3.75rem)`
  },
  bottom: {
    transform: `rotateX(-90deg) translateZ(3.75rem)`
  },
};

export default FortuneCube;