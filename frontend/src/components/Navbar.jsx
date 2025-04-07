import { useNavigate } from "react-router-dom";
import '../styles/style.css';


const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3>ChatGPT Clone</h3>
      <div className="nav-links">
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <a className="logout-btn" href="/login">Login</a>
            <a className="logout-btn" href="/signup">Signup</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
