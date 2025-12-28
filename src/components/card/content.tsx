import Button from "../button/content";
import "./style.scss";

export default function CardKonserUnggulan() {
  return (
    <div className="cardContainer">
      <div className="cardContainer__cardHeader">
        <img src="/images/homePage/bruno-mars.webp" alt="Konser Unggulan" />
        <h1>Nama Penyanyi</h1>
      </div>
      <div className="cardContainer__cardDesc">
        <h2>Tanggal & Tempat</h2>
        <h3>Mulai Dari Rp. XX.XXX</h3>
        <Button btnTitle="Beli Tiket" btnType="button" />
      </div>
    </div>
  );
}
