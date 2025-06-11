import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import background from '../images/divination-bg.png';

const Divination = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/divination/select');
  };

  return (
    <IntroPage
      backgroundImage={background}
      title=" Divination"
      description={
        <>
          마음속에 떠오르는 질문이 있나요?<br />
          운명에게 조심스럽게 물어보면, 짧지만 의미 있는 답변이 돌아올지도 몰라요.<br />
          언제든 질문을 입력해보세요. 운명이 답할 차례입니다.
        </>
      }
      buttonText="질문하러 가기"
      onButtonClick={handleClick}
    />
  );
}

export default Divination;