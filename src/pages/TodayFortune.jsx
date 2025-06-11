import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import background from '../images/fortune-bg.png';

const TodayFortune = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/select');
  };

  return (
    <IntroPage
      backgroundImage={background}
      title="Horoscope"
      description={
        <>
          오늘 하루의 전반적인 운세를 확인해보세요.<br />
          작은 힌트가 예상치 못한 선택에 도움이 될지도 몰라요.<br />
          당신의 하루가 조금 더 편안해지길 바랍니다.
        </>
      }
      buttonText="운세 보러 가기"
      onButtonClick={handleClick}
    />
  );
};

export default TodayFortune;