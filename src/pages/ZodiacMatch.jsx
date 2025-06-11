import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultWrapper from '../components/ResultWrapper';
import zodiacResultImg from '../images/zodiac-result.png';

const signTraits = {
  양자리: '열정적이고 추진력이 강한',
  황소자리: '끈기 있고 안정적인',
  쌍둥이자리: '호기심 많고 유쾌한',
  게자리: '감성적이고 배려심 있는',
  사자자리: '자신감 있고 리더십 있는',
  처녀자리: '신중하고 현실적인',
  천칭자리: '균형을 중시하고 매너 있는',
  전갈자리: '집중력 있고 열정적인',
  궁수자리: '자유롭고 낙천적인',
  염소자리: '성실하고 목표 지향적인',
  물병자리: '창의적이고 독립적인',
  물고기자리: '공감 능력이 뛰어나고 상상력이 풍부한',
};

const relationshipMessages = [
  '서로의 성향이 다르지만 보완이 가능합니다.',
  '비슷한 성격 덕분에 잘 맞는 편이에요.',
  '서로를 자극하며 성장하는 좋은 궁합입니다.',
  '충돌도 있지만, 이해한다면 깊은 관계가 됩니다.',
  '서로의 장점을 존중한다면 좋은 관계를 기대할 수 있어요.',
  '감정과 이성이 조화를 이루는 궁합입니다.',
  '서로를 통해 새로운 시각을 배울 수 있습니다.',
  '생활 방식은 다르지만 끌림이 있는 조합이에요.',
  '대화가 중요한 열쇠가 되는 관계입니다.',
  '마치 운명처럼 잘 어울리는 조합이에요.',
];

function getSeed(sign1, sign2) {
  const sorted = [sign1, sign2].sort();
  const key = sorted.join('-');
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

const ZodiacMatch = () => {
  const location = useLocation();
  const signs = location.state?.signs || [];

  if (signs.length !== 2) {
    return <p>별자리 두 개를 선택해주세요.</p>;
  }

  const [signA, signB] = signs;
  const [first, second] = [signA, signB].sort();
  const seed = getSeed(signA, signB);
  const message = relationshipMessages[seed % relationshipMessages.length];

  const traitA = signTraits[first] || '';
  const traitB = signTraits[second] || '';

  const description = `${first}는 ${traitA} 성격이고, ${second}는 ${traitB} 성격입니다. ${message}`;

  return (
    <ResultWrapper
      image={zodiacResultImg}
      title="별자리 궁합"
      subtitle={`${signA} x ${signB}`}
      description={description}
    />
  );
};

export default ZodiacMatch;