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

const TarotResult = () => {
  const location = useLocation();
  const selected = location.state?.selected || [];

  const randomIndex = selected.length === 1
    ? Math.floor(Math.random() * tarotResults.length)
    : null;

  const result = tarotResults[randomIndex];

  if (!result) return <p>카드 선택 정보를 찾을 수 없습니다.</p>;

  return (
    <ResultWrapper
      image={
        <img
          src={result.image}
          alt={result.name}
          style={{
            width: '100%',
            maxWidth: '18.75rem',
            borderRadius: '0.5rem',
          }}
        />
      }
      title="타로 결과"
      subtitle={result.name}
      description={<p style={styles.meaning}>{result.meaning}</p>}
    />
  );
};

const styles = {
  meaning: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
};

export default TarotResult;