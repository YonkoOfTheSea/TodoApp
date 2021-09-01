import { Link } from "react-router-dom";


function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>TodoApp</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/logout">
          <li>logout</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;