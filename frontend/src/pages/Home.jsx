import { useEffect, useState } from 'react';
import Chatbox from '../components/ChatBox';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [sessions, setSessions] = useState([]);
  const [currentId, setCurrentId] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chatSessions")) || [];
    setSessions(data);
    if (data.length) setCurrentId(data[0].id);
  }, []);

  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem("chatSessions", JSON.stringify(sessions));
  }, [sessions]);

  const newChat = () => {
    const newSession = {
      id: Date.now().toString(),
      title: `Chat ${sessions.length + 1}`,
      messages: [{ text: "Hi there! How can I help you?", type: "bot" }]
    };
    setSessions([newSession, ...sessions]);
    setCurrentId(newSession.id);
  };

  const saveMessage = (id, newMessages) => {
    setSessions(prev =>
      prev.map(s =>
        s.id === id ? { ...s, messages: newMessages } : s
      )
    );
  };

  const currentSession = sessions.find(s => s.id === currentId) || { messages: [] };

  return (
    <div className="home-container">
      <Sidebar
        sessions={sessions}
        currentId={currentId}
        setCurrentId={setCurrentId}
        newChat={newChat}
      />
      <Chatbox
        sessionId={currentId}
        messages={currentSession.messages}
        saveMessage={saveMessage}
      />
    </div>
  );
};

export default Home;
