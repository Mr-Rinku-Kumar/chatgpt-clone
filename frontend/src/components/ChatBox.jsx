import { useEffect, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import '../styles/style.css';

const Chatbox = ({ sessionId, saveMessage, messages }) => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, type: "user" };
    const updatedMessages = [...messages, userMsg];
    saveMessage(sessionId, updatedMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { text: "This is a static reply.", type: "bot" };
      saveMessage(sessionId, [...updatedMessages, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-section">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-msg ${msg.type}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {isTyping && (
          <div className="chat-msg bot typing">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
          </div>
        )}
      </div>

      <form className="chat-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"><IoSend /></button>
      </form>
    </div>
  );
};

export default Chatbox;
