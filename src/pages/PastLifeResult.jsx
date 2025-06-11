import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultWrapper from '../components/ResultWrapper';
import pastlifeImg from '../images/PastLife-result.png';

const arrMonth = ['매력적인', '시끄러운', '찌질한', '못생긴', '키작은', '예쁜', '냄새나는', '모자란', '시크한', '키가 큰', '변태같은', '돈많은'];
const arrDay = [
  "망나니", "노비", "장사꾼", "포졸", "백수", "스님", "공주", "알파카",
  "황제", "내시", "무사", "사또", "시녀", "변태", "광대", "진상", "술고래",
  "심봉사", "변사공", "맹구", "동네바보", "선비", "돌", "농사꾼", "왕비",
  "점쟁이", "변호사", "토끼", "바람둥이", "산적", "과부"
];

const getPastLife = (month, day) => {
  const adj = arrMonth[parseInt(month) - 1] || '수수한';
  const noun = arrDay[parseInt(day) - 1] || '정체불명';
  return `${adj} ${noun}`;
};

const PastLifeResult = () => {
  const location = useLocation();
  const { month, day } = location.state || {};
  const result = (month && day) ? getPastLife(month, day) : '정보 없음';

  return (
    <ResultWrapper
      image={pastlifeImg}
      title="당신의 전생"
      subtitle={`${month}월 ${day}일생`}
      description={`당신의 전생은 ${result}입니다.`}
    />
  );
};

export default PastLifeResult;