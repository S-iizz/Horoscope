import React, { useState, useRef } from 'react';
import backgroundImage from '../images/bg-black.png';

const answers = [
  "곧 좋은 일이 생길 거예요.",
  "지금은 기다릴 때입니다.",
  "당신의 직감이 맞아요.",
  "조심해야 할 시기입니다.",
  "도전해보세요. 결과는 따라옵니다.",
  "생각보다 더 가까이 있습니다.",
  "포기하지 마세요.",
  "행운이 곧 찾아옵니다.",
  "다시 한 번 생각해보세요.",
  "누군가 당신을 돕고 있어요.",
  "지금 하는 고민은 머지않아 해결될 거예요.",
  "당신이 믿는 대로 행동하면 됩니다.",
  "숨겨진 기회가 곧 드러납니다.",
  "불확실해 보여도 그 길이 맞습니다.",
  "한 걸음 물러서면 해답이 보여요.",
  "마음의 소리에 귀 기울이세요.",
  "기다리는 동안 배움이 있습니다.",
  "우연처럼 다가온 일이 운명이 될 수 있어요.",
  "당신의 노력이 곧 결실을 맺습니다.",
  "지금은 새로운 시작을 위한 준비 시간입니다.",
];

const DivinationResult = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const question = input.trim();
    setChat((prev) => [...prev, { type: 'user', text: question }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      setChat((prev) => [...prev, { type: 'bot', text: randomAnswer }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div style={{ ...styles.background }}>
      <div style={styles.overlay}>

        <div style={styles.chatBox}>
          {chat.map((msg, i) => (
            <div key={i} style={msg.type === 'user' ? styles.userMsg : styles.botMsg}>
              {msg.text}
            </div>
          ))}
          {isTyping && <div style={styles.botMsg}>...</div>}
          <div ref={chatRef} />
        </div>

        <div style={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="운명에게 물어보세요..."
            style={styles.input}
          />
          <button
            style={styles.button}
            onClick={handleSend}
          >
            질문
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2.5rem 1.25rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    maxWidth: '50rem',
    margin: '0 auto',
    borderRadius: '1rem',
    padding: '2.5rem 1.5rem',
    color: '#fff',
  },
  chatBox: {
    backgroundColor: '#1a1a1a',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    height: '25rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.625rem',
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#444',
    padding: '0.625rem 1rem',
    borderRadius: '1.25rem 1.25rem 0 1.25rem',
    maxWidth: '80%',
    color: '#fff',
  },
  botMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#666',
    padding: '0.625rem 1rem',
    borderRadius: '1.25rem 1.25rem 1.25rem 0',
    maxWidth: '80%',
    color: '#fff',
  },
  inputArea: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '1.25rem',
  },
  input: {
    width: '60%',
    height: '2.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    padding: '0 0.75rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0 1.25rem',
    border: 'none',
    borderRadius: '0.375rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
  },
};

export default DivinationResult;