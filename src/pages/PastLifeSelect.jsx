import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import sideImage from '../images/PastLife-select.png';

const PastLifeSelect = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const navigate = useNavigate();

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (month && day) {
      navigate('/pastlife/result', { state: { month, day } });
    }
  };

  return (
    <PageWrapper title="Past Life">
      <div style={styles.box}>
        <div style={styles.left}>
          <label style={styles.label}>Month</label>
          <select value={month} onChange={(e) => setMonth(e.target.value)} style={styles.select}>
            <option value="">선택</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <label style={styles.label}>Day</label>
          <select value={day} onChange={(e) => setDay(e.target.value)} style={styles.select}>
            <option value="">선택</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <button style={styles.button} onClick={handleSubmit}>전생 확인</button>
        </div>

        <div style={styles.right} />
      </div>
    </PageWrapper>
  );
};

const styles = {
  box: {
    display: 'flex',
    backgroundColor: '#1a1a1a',
    borderRadius: '1rem',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '50rem',
    gap: '2.5rem',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  label: {
    fontSize: '1rem',
  },
  select: {
    height: '2.5rem',
    fontSize: '1rem',
    borderRadius: '0.375rem',
    border: 'none',
    padding: '0 0.75rem',
  },
  button: {
    marginTop: '2rem',
    padding: '0.625rem 1.5rem',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
  },
  right: {
    flex: 1,
    backgroundImage: `url(${sideImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0.375rem',
    minHeight: '18.75rem',
  },
};

export default PastLifeSelect;