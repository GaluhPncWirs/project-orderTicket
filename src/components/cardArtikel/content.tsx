import Button from "../button/content";
import "./style.scss";

type propsCardArtikel = {
  srcImg: string;
  titleArtikel: string;
  descArtikel: string;
  dateArtikel: string;
};

export default function CardArtikel(props: propsCardArtikel) {
  const { srcImg, titleArtikel, descArtikel, dateArtikel } = props;

  return (
    <div className="cardArtikel">
      <img src={srcImg} alt="Artikel" className="cardArtikel__imgArtikel" />
      <div className="cardArtikel__imgArtikel__descArtikel">
        <h2>{titleArtikel}</h2>
        <p>{descArtikel}</p>
        <h4>{dateArtikel}</h4>
        <div>
          <Button btnType="button" btnTitle="Baca Selengkapnya" />
        </div>
      </div>
    </div>
  );
}
