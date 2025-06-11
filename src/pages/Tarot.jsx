import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import background from '../images/tarot-bg.png';

const Tarot = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tarot/select');
  };

  return (
    <IntroPage
      backgroundImage={background}
      title="Tarot"
      description={
        <>
          타로카드가 전하는 오늘의 메시지를 만나보세요.<br />
          한 장을 뽑으면 카드의 의미를 통해 스스로의 고민을 비춰볼 수 있고,<br />
          세 장을 뽑으면 과거, 현재, 미래의 흐름을 읽어드립니다.
        </>
      }
      buttonText="타로 카드 뽑으러 가기"
      onButtonClick={handleClick}
    />
  );
}
export default Tarot;