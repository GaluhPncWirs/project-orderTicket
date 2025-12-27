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
        </div>
      </div>
    </RootContainer>
  );
}
