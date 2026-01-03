import City from "./city/content";
import DatePicker from "./date/content";
import Genre from "./genre/content";
import "./style.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__filter">
        <h3>Filter</h3>
        <img src="/images/concertPage/filter.png" alt="Kota" />
      </div>
      <div>
        <City />
      </div>
      <div>
        <DatePicker />
      </div>
      <div>
        <Genre />
      </div>
      <div>
        <div className="textList">
          <img src="/images/concertPage/price.png" alt="Kota" />
          <h4>Harga</h4>
        </div>
        <div className="arrow">
          <div />
          <div />
        </div>
      </div>
      <span />
    </div>
  );
}
