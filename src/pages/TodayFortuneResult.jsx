import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultWrapper from '../components/ResultWrapper';
import fortuneImg from '../images/fortune-result.png';

const TodayFortuneResult = () => {
  const location = useLocation();
  const level = location.state?.level || '정보 없음';
  const message = location.state?.message || '운세 메시지가 없습니다.';
  const date = location.state?.date || '날짜 없음';

  return (
    <ResultWrapper
      image={
        <img
          src={fortuneImg}
          alt="포춘쿠키"
          style={{ maxWidth: '18.75rem', width: '100%' }}
        />
      }
      title="오늘의 총운"
      subtitle={`${date} - ${level}`}
      description={<p style={styles.text}>{message}</p>}
    />
  );
};

const styles = {
  text: {
    fontSize: '1.25rem',
    lineHeight: '2.5',
  },
};

export default TodayFortuneResult;