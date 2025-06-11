import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import background from '../images/zodiac-bg.png';

const Zodiac = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/zodiac/select');
  };

  return (
    <IntroPage
      backgroundImage={background}
      title="Zodiac"
      description={
        <>
          별자리를 통해 오늘의 흐름을 가볍게 확인해보세요.<br />
          하나를 선택하면 당신의 운세를, 두 개를 선택하면 서로의 궁합을 알려드려요.<br />
          오늘, 별이 전하는 메시지를 들어보는 건 어떨까요?
        </>
      }
      buttonText="별자리 고르러 가기"
      onButtonClick={handleClick}
    />
  );
}

export default Zodiac;