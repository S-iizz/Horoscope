import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const zodiacSigns = [
  { name: '양자리', range: '3/21 ~ 4/19' },
  { name: '황소자리', range: '4/20 ~ 5/20' },
  { name: '쌍둥이자리', range: '5/21 ~ 6/21' },
  { name: '게자리', range: '6/22 ~ 7/22' },
  { name: '사자자리', range: '7/23 ~ 8/22' },
  { name: '처녀자리', range: '8/23 ~ 9/22' },
  { name: '천칭자리', range: '9/23 ~ 10/22' },
  { name: '전갈자리', range: '10/23 ~ 11/22' },
  { name: '궁수자리', range: '11/23 ~ 12/21' },
  { name: '염소자리', range: '12/22 ~ 1/19' },
  { name: '물병자리', range: '1/20 ~ 2/18' },
  { name: '물고기자리', range: '2/19 ~ 3/20' },
];

const ZodiacSelect = () => {
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const toggleSelect = (sign) => {
    setSelected((prev) =>
      prev.includes(sign)
        ? prev.filter((s) => s !== sign)
        : prev.length < 2
          ? [...prev, sign]
          : prev
    );
  };

  const handleResult = () => {
    if (selected.length === 1 && date) {
      const seedString = selected[0] + date;
      const seed = [...seedString].reduce((acc, c) => acc + c.charCodeAt(0), 0);
      const message = horoscopeMessages[seed % horoscopeMessages.length];

      navigate('/zodiac/fortune', {
        state: {
          sign: selected[0],
          date,
          message,
        },
      });
    } else if (selected.length === 2) {
      navigate('/zodiac/match', { state: { signs: selected } });
    }
  };

  const buttonText =
    selected.length === 0
      ? '별자리를 선택하세요'
      : selected.length === 1
        ? '오늘의 운세 보기'
        : '궁합 보기';

  const isFortuneReady = selected.length === 1 && date;
  const isMatchReady = selected.length === 2;

  return (
    <PageWrapper title="Zodiac">
      <div style={styles.grid}>
        {zodiacSigns.map((signObj, index) => (
          <button
            key={index}
            style={{
              ...styles.card,
              backgroundColor: selected.includes(signObj.name) ? '#333' : '#1a1a1a',
              border: selected.includes(signObj.name) ? '0.125rem solid white' : 'none',
            }}
            onClick={() => toggleSelect(signObj.name)}
          >
            <div style={styles.signName}>{signObj.name}</div>
            <div style={styles.signRange}>{signObj.range}</div>
          </button>
        ))}
      </div>

      {selected.length === 1 && (
        <div style={styles.dateInputWrapper}>
          <label style={styles.label}>날짜 선택:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </div>
      )}

      <button
        onClick={handleResult}
        style={{
          ...styles.resultBtn,
          backgroundColor: (isFortuneReady || isMatchReady) ? 'white' : '#666',
          color: (isFortuneReady || isMatchReady) ? 'black' : '#aaa',
          cursor: (isFortuneReady || isMatchReady) ? 'pointer' : 'not-allowed',
        }}
        disabled={!(isFortuneReady || isMatchReady)}
      >
        {buttonText}
      </button>
    </PageWrapper>
  );
};

const horoscopeMessages = [
  "오늘은 생각보다 순조로운 하루가 될 거예요.",
  "사소한 실수에 주의하세요.",
  "뜻밖의 좋은 소식을 들을 수 있어요.",
  "마음먹은 일을 실천하기 좋은 날입니다.",
  "누군가의 도움이 큰 힘이 될 거예요.",
  "몸과 마음의 균형을 챙기세요.",
  "새로운 아이디어가 떠오를 수 있어요.",
  "지나간 일은 잊고 새롭게 시작해보세요.",
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '1.5rem',
    width: '100%',
    marginBottom: '1.25rem',
  },
  card: {
    borderRadius: '1rem',
    padding: '2.5rem 0',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signName: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  signRange: {
    fontSize: '0.875rem',
    color: '#ccc',
  },
  resultBtn: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    border: 'none',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease',
  },
  dateInputWrapper: {
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  label: {
    color: 'white',
    fontSize: '1rem',
  },
  input: {
    fontSize: '1rem',
    padding: '0.5rem',
    borderRadius: '6px',
    border: 'none',
  },
};

export default ZodiacSelect;