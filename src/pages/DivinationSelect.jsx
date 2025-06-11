import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const sampleQuestions = [
  "나의 진로는 어떻게 될까요?",
  "지금 이 선택은 맞는 걸까요?",
  "앞으로의 연애운은 어떤가요?",
  "고민하고 있는 일을 해도 될까요?",
];

const DivinationSelect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % sampleQuestions.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/divination/result');
  };

  return (
    <PageWrapper title="Divination">
      <div style={styles.ball}>
        <p style={styles.question}>{sampleQuestions[currentIndex]}</p>
      </div>

      <button style={styles.button} onClick={handleClick}>
        질문하러 가기
      </button>
    </PageWrapper>
  );
};

const styles = {
  ball: {
    width: '15rem',
    height: '15rem',
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, #444 0%, #111 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25rem',
    boxShadow: '0 0 2.5rem rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
  },
  question: {
    fontSize: '1rem',
    opacity: 0.8,
    textAlign: 'center',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    border: 'none',
    borderRadius: '0.375rem',
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};

export default DivinationSelect;