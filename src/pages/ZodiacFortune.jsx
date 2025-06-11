import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultWrapper from '../components/ResultWrapper';
import zodiacResultImg from '../images/zodiac-result.png';

const horoscopeMessages = [
  "오늘은 모험을 즐기기 좋은 날입니다.",
  "평소보다 감정이 예민할 수 있어요.",
  "새로운 인연이 찾아올지도 몰라요.",
  "결정을 내릴 땐 직감을 믿어보세요.",
  "작은 행운이 숨어 있을 거예요.",
  "휴식이 필요한 하루입니다.",
  "주변 사람들과의 대화가 중요해요.",
  "계획했던 일이 예상보다 수월할 수 있어요.",
  "오늘은 자신감을 가져도 좋아요.",
  "사소한 일에 스트레스 받지 마세요.",
  "배움에 열려 있으면 좋은 기회가 와요.",
  "과거보다 지금 이 순간에 집중해보세요.",
];

const ZodiacFortune = () => {
  const location = useLocation();
  const sign = location.state?.sign || '별자리';
  const date = location.state?.date || '';

  const seedString = sign + date;
  const seed = [...seedString].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const messageIndex = seed % horoscopeMessages.length;
  const message = horoscopeMessages[messageIndex];

  return (
    <ResultWrapper
      image={zodiacResultImg}
      title="별자리 운세"
      subtitle={`${sign} - ${date}`}
      description={message}
    />
  );
};

export default ZodiacFortune;
