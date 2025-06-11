import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import FortuneCube from '../components/FortuneCube';

const TodayFortuneSelect = () => {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (!date) return;

    const seed = [...date].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const level = fortuneLevels[seed % fortuneLevels.length];
    const message = fortuneMessages[(seed + 7) % fortuneMessages.length];

    navigate('/result', { state: { level, message, date } });
  };

  return (
    <PageWrapper title="Horoscope">
      <FortuneCube />
      <div style={styles.inputBox}>
        <label style={styles.label}>날짜를 선택하세요</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleClick} disabled={!date}>
          운세 확인
        </button>
      </div>
    </PageWrapper>
  );
};

const fortuneLevels = ['대길', '중길', '소길'];
const fortuneMessages = [
  "오늘은 생각보다 순조로운 하루가 될 거예요.",
  "사소한 실수에 주의하세요.",
  "뜻밖의 좋은 소식을 들을 수 있어요.",
  "마음먹은 일을 실천하기 좋은 날입니다.",
  "누군가의 도움이 큰 힘이 될 거예요.",
  "몸과 마음의 균형을 챙기세요.",
  "새로운 아이디어가 떠오를 수 있어요.",
  "지나간 일은 잊고 새롭게 시작해보세요",
  "작은 기쁨이 큰 행복으로 이어질 수 있어요.",
  "오늘은 자신의 감정을 솔직하게 표현해보세요.",
  "지나친 욕심은 오히려 손해를 부를 수 있어요.",
  "우연한 만남이 인연으로 발전할 수 있어요.",
  "기대하지 않은 일이 좋은 방향으로 흘러갑니다.",
  "스스로를 칭찬하는 하루를 보내보세요.",
  "변화는 불안하지만 성장의 시작이 될 수 있어요.",
  "오늘은 계획보다는 흐름을 따라가보세요.",
  "모든 일이 마음먹기에 달려 있어요.",
  "소중한 사람에게 고마움을 표현해보세요.",
];

const styles = {
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
    marginTop: '1rem'
  },
  label: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    fontSize: '1rem',
    padding: '0.5rem',
    borderRadius: '6px',
    border: 'none',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
  },
};

export default TodayFortuneSelect;