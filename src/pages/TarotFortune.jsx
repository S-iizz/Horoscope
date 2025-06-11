import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultWrapper from '../components/ResultWrapper';

import card1 from '../images/tarot/1.png';
import card2 from '../images/tarot/2.png';
import card3 from '../images/tarot/3.png';
import card4 from '../images/tarot/4.png';
import card5 from '../images/tarot/5.png';
import card6 from '../images/tarot/6.png';
import card7 from '../images/tarot/7.png';
import card8 from '../images/tarot/8.png';
import card9 from '../images/tarot/9.png';
import card10 from '../images/tarot/10.png';

const tarotResults = [
  { image: card1, name: '펜타클 11, PAGE of PENTACLES', meaning: '중요한 전환점에 도달하게 될 것입니다.' },
  { image: card2, name: '소드 3, THREE of SWORDS', meaning: '삶에 심각한 고통이 있다는 것을 암시합니다.' },
  { image: card3, name: '소드 13, QUEEN of SWORDS', meaning: '지적인 힘과 단호한 태도를 상징합니다.' },
  { image: card4, name: '펜타클 14, KING of PENTACLES', meaning: '성취, 풍요로움, 안정성, 실용성과 관련된 의미를 가지고 있습니다.' },
  { image: card5, name: '메이저 0, THE FOOL', meaning: '새로운 시작이나 여행, 자유분방함, 미숙함을 상징합니다.' },
  { image: card6, name: '메이저 1, THE MAGICIAN', meaning: '기술, 창조, 영감, 의지력, 신체적인 능력, 상상력을 상징합니다.' },
  { image: card7, name: '메이저 5, THE HIEROPHANT', meaning: '물질적인 힘, 보호를 의미합니다.' },
  { image: card8, name: '메이저 10, WHEEL of FORTUNE', meaning: '운명의 힘이 작동을 시작했음을 알립니다.' },
  { image: card9, name: '메이저 12, THE HANGED MAN', meaning: '잠시 멈추어 자신의 생각과 관점을 바꾸는 것을 추천합니다.' },
  { image: card10, name: '메이저 18, THE MOON', meaning: '혼란스럽고 모든 게 불확실한 상황입니다.' },
];

function getSeededIndexes(seed, count, max) {
  let indexes = [];
  let used = new Set();
  let currentSeed = seed;

  while (indexes.length < count) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const index = currentSeed % max;
    if (!used.has(index)) {
      indexes.push(index);
      used.add(index);
    }
  }

  return indexes;
}

const TarotFortune = () => {
  const location = useLocation();
  const date = location.state?.date || '';

  const seed = [...date].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const indexes = getSeededIndexes(seed, 3, tarotResults.length);
  const selectedCards = indexes.map((i) => tarotResults[i]);

  const overallMessages = [
    "현재의 어려움을 딛고 큰 변화를 맞이할 수 있는 시기입니다.",
    "조심스럽지만 확실한 성장의 길 위에 있습니다.",
    "자신의 본능을 믿고 행동하면 기회가 찾아옵니다.",
    "불안한 마음보다는 안정과 균형에 집중해보세요.",
    "지금은 잠시 쉬어가는 것이 오히려 더 큰 힘이 됩니다.",
    "새로운 시도는 성공으로 이어질 가능성이 높습니다.",
    "모든 것은 당신의 선택에 달려 있습니다.",
    "감정에 휘둘리기보다는 이성적으로 판단할 시점입니다.",
    "기회는 이미 눈앞에 있습니다. 잡을 준비를 하세요.",
    "과거의 경험이 당신을 단단하게 만들어 줄 것입니다.",
  ];

  const overallInterpretation = overallMessages[seed % overallMessages.length];

  return (
    <ResultWrapper
      image={
        <div style={styles.imageGroup}>
          {selectedCards.map((card, idx) => (
            <img
              key={idx}
              src={card.image}
              alt={card.name}
              style={styles.image}
            />
          ))}
        </div>
      }
      title="타로 결과"
      subtitle=""
      description={
        <div>
          {selectedCards.map((card, idx) => (
            <div key={idx} style={{ marginBottom: '1.5rem' }}>
              <p style={styles.label}>{['과거', '현재', '미래'][idx]} - {card.name}</p>
              <p style={styles.meaning}>{card.meaning}</p>
            </div>
          ))}

          <div style={{ marginTop: '2rem' }}>
            <p style={{ ...styles.label, fontSize: '1.5rem' }}>전체 흐름 해석</p>
            <p style={styles.meaning}>{overallInterpretation}</p>
          </div>
        </div>
      }
    />
  );
};

const styles = {
  imageGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '8.125rem',
    height: 'auto',
    borderRadius: '0.5rem',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.375rem',
  },
  meaning: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
};

export default TarotFortune;