import Sidebar from "../../components/sidebar/content";
import CardComponent from "../../layout/card/layout";
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
          <div className="scheduleConcert__content__container">
            <div className="scheduleConcert__content__container__cardConcerts">
              <CardComponent
                srcImg="/images/homePage/taylor-swift.webp"
                altImg="taylor swift"
                btnTitle="Beli Tiket"
              >
                <h2>Taylor Swift</h2>
                <p>Sabtu, 19 April 2026, 19:00</p>
                <h4>Stadion Utama Gelora Bung Karno, Jakarta</h4>
                <span className="horizontalLine" />
                <h2>
                  Mulai dari <span>Rp 750.000</span>
                </h2>
              </CardComponent>
              <CardComponent
                srcImg="/images/homePage/taylor-swift.webp"
                altImg="taylor swift"
                btnTitle="Beli Tiket"
              >
                <h2>Taylor Swift</h2>
                <p>Sabtu, 19 April 2026, 19:00</p>
                <h4>Stadion Utama Gelora Bung Karno, Jakarta</h4>
                <span className="horizontalLine" />
                <h2>
                  Mulai dari <span>Rp 750.000</span>
                </h2>
              </CardComponent>
              <CardComponent
                srcImg="/images/homePage/taylor-swift.webp"
                altImg="taylor swift"
                btnTitle="Beli Tiket"
              >
                <h2>Taylor Swift</h2>
                <p>Sabtu, 19 April 2026, 19:00</p>
                <h4>Stadion Utama Gelora Bung Karno, Jakarta</h4>
                <span className="horizontalLine" />
                <h2>
                  Mulai dari <span>Rp 750.000</span>
                </h2>
              </CardComponent>
            </div>
          </div>
        </div>
      </div>
    </RootContainer>
  );
}
