import '../styles/style.css';

const Sidebar = ({ sessions, currentId, setCurrentId, newChat }) => {
  return (
    <div className="sidebar">
      <button className="new-chat-btn" onClick={newChat}>+ New Chat</button>
      <div className="chat-history">
        {sessions.map((s, index) => (
          <div
            key={s.id}
            className={`history-item ${s.id === currentId ? 'active' : ''}`}
            onClick={() => setCurrentId(s.id)}
          >
            {s.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
