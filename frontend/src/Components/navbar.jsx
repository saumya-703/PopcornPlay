import { Link } from "react-router-dom";
import "../css/navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🍿▶️</Link>
      </div>
      <div className="title">
        <Link to="/">Popcorn Play</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link"></Link>
        <Link to="/favorites" className="nav-link">💖</Link>
      </div>
    </nav>
  );
}

export default Navbar;
