import { Link } from "react-router";
import "./style.scss";
import SearchInput from "../searchInput/content";

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
        <Link to="/scheduleConcert" className="linkNavbar">
          Jadwal
        </Link>
        <Link to="/concertPage" className="linkNavbar">
          Konser
        </Link>
        <Link to="/" className="linkNavbar">
          Bantuan
        </Link>
      </ul>
      <SearchInput />
    </nav>
  );
}
