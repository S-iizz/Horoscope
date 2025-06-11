import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import background from '../images/PastLife-bg.png';

const PastLife = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pastlife/select');
  };

  return (
    <IntroPage
      backgroundImage={background}
      title="Past Life"
      description={
        <>
          생일에 담긴 단서로 당신의 전생을 찾아드립니다.<br />
          태어난 월과 일을 선택하면, 그에 어울리는 전생 캐릭터를 알려드릴게요.<br />
          당신은 과연 어떤 삶을 살았던 사람일까요?
        </>
      }
      buttonText="나의 전생 보러 가기"
      onButtonClick={handleClick}
    />
  );
}

export default PastLife;