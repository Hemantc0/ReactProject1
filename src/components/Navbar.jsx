import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/completed">Completed</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;