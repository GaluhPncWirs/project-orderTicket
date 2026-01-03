import City from "./city/content";
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
        {/* <div className="arrow">
          <div />
          <div />
        </div> */}
      </div>
      <div>
        <div className="textList">
          <img src="/images/concertPage/date.png" alt="Kota" />
          <h4>Tanggal</h4>
        </div>

        <div className="arrow">
          <div />
          <div />
        </div>
      </div>
      <div>
        <div className="textList">
          <img src="/images/concertPage/genre.png" alt="Kota" />
          <h4>Genre</h4>
        </div>
        <div className="arrow">
          <div />
          <div />
        </div>
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
