import Sidebar from "../../components/sidebar/content";
import RootContainer from "../../layout/rootContainer";
import "./style.scss";

export default function SchedulePage() {
  return (
    <RootContainer>
      <h1 className="title">Jadwal Konser</h1>
      <div className="scheduleConcert">
        <Sidebar />
        <div className="scheduleConcert__content">
          <ul className="scheduleConcert__content__listCity">
            <li>Jakarta</li>
            <li>Surabaya</li>
            <li>Bandung</li>
            <li>Medan</li>
            <li>Lampung</li>
            <li>Bali</li>
          </ul>
          <div className="scheduleConcert__content__cardConcerts">
            <h1>Tanggal</h1>
            <p>Jumat, 19 April, 2026</p>
            <div></div>
          </div>
        </div>
      </div>
    </RootContainer>
  );
}
