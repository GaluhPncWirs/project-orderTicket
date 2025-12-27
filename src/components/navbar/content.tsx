import { Link } from "react-router";
import "./style.scss";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Blogspot
          </Link>
        </li>
      </ul>
    </nav>
  );
}
