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
        <Link to="/" className="linkNavbar">
          Home
        </Link>
        <Link to="/konser" className="linkNavbar">
          Konser
        </Link>
        <Link to="/" className="linkNavbar">
          Jadwal
        </Link>
        <Link to="/" className="linkNavbar">
          Bantuan
        </Link>
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
