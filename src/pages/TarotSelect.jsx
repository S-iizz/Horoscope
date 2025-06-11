import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tarotCardBack from '../images/tarot-card-bg.png';
import PageWrapper from '../components/PageWrapper';

const TarotSelect = () => {
  const cards = Array(23).fill(0);
  const center = Math.floor(cards.length / 2);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const toggleCard = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else if (selected.length < 3) {
      setSelected([...selected, index]);
    }
  };

  const handleResultClick = () => {
    if (selected.length === 1) {
      navigate('/tarot/result', { state: { selected } });
    } else if (selected.length === 3 && date) {
      const seedString = date;
      const seed = [...seedString].reduce((acc, c) => acc + c.charCodeAt(0), 0);

      navigate('/tarot/fortune', {
        state: {
          selected: selected.sort(),
          date,
          seed,
        },
      });
    }
  };

  const isReady = (selected.length === 1) || (selected.length === 3 && date);

  return (
    <PageWrapper title="Tarot">
      <div style={styles.cardWrapper}>
        {cards.map((_, index) => {
          const angle = (index - center) * 5;
          const offset = (index - center) * 1.875;
          const isSelected = selected.includes(index);

          return (
            <img
              key={index}
              src={tarotCardBack}
              alt="타로카드"
              onClick={() => toggleCard(index)}
              style={{
                ...styles.card,
                transform: `translateX(${offset}rem) rotate(${angle}deg) translateY(${isSelected ? '-2.5rem' : '0'})`,
                zIndex: index,
                opacity: selected.length >= 3 && !isSelected ? 0.4 : 1,
              }}
            />
          );
        })}
      </div>

      {selected.length === 3 && (
        <div style={styles.dateWrapper}>
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
        style={{
          ...styles.resultBtn,
          backgroundColor: isReady ? 'white' : '#666',
          color: isReady ? 'black' : '#ccc',
          cursor: isReady ? 'pointer' : 'not-allowed',
        }}
        disabled={!isReady}
        onClick={handleResultClick}
      >
        결과 보기
      </button>
    </PageWrapper>
  );
};

const styles = {
  cardWrapper: {
    position: 'relative',
    height: '26.25rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '11.25rem',
    height: '17.5rem',
    position: 'absolute',
    transformOrigin: 'bottom center',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    cursor: 'pointer',
  },
  dateWrapper: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  label: {
    fontSize: '1rem',
    color: 'white',
  },
  input: {
    fontSize: '1rem',
    padding: '0.5rem',
    borderRadius: '6px',
    border: 'none',
  },
  resultBtn: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    border: 'none',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease',
  },
};

export default TarotSelect;