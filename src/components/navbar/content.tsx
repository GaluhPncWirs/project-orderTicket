import { Link } from "react-router";
import "./style.scss";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <img
        src="/images/navbar/GigsTicket_logo.png"
        alt="Logo"
        className="navbar__logo"
      />
      <ul className="navbar__text">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            Konser
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Jadwal
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Bantuan
          </Link>
        </li>
      </ul>
      <div className="navbar__search">
        <img
          src="/images/navbar/search.png"
          alt="Search"
          className="navbar__search__img"
        />
        <input type="text" className="navbar__search__inputSearch" />
      </div>
    </nav>
  );
}
