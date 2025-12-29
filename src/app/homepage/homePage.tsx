import CardKonserUnggulan from "../../components/card/content";
import RootContainer from "../../layout/rootContainer";
import "./style.scss";

export default function HomePage() {
  return (
    <RootContainer>
      <div className="containerHomePage">
        <div className="heroSection">
          <h1 className="heroSection__title">
            Beli Tiket Konser Favoritmu Sekarang
          </h1>
          <h3 className="heroSection__subTitle">Resmi, Aman, dan Cepat</h3>
          <button className="heroSection__btnCTA">Cari Konser</button>
        </div>

        <div className="konserUnggulan">
          <h1>Konser Unggulan</h1>
          <div className="konserUnggulan__listConcert">
            <CardKonserUnggulan />
            <CardKonserUnggulan />
            <CardKonserUnggulan />
          </div>
        </div>

        <div className="upComingAtCity">
          <h1>Akan Datang di Kotamu</h1>
          <ul className="upComingAtCity__listCity">
            <li>Jakarta</li>
            <li>Surabaya</li>
            <li>Bandung</li>
            <li>Medan</li>
            <li>Lampung</li>
            <li>Bali</li>
          </ul>
          <div className="upComingAtCity__city">
            <img src="/images/homePage/next.png" alt="arrowLeft" />
            <CardKonserUnggulan />
            <CardKonserUnggulan />
            <CardKonserUnggulan />
            <img src="/images/homePage/next.png" alt="arrowRight" />
          </div>
        </div>
      </div>
    </RootContainer>
  );
}
