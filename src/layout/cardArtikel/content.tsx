import Button from "../../components/button/content";
import type { cardArtikel } from "../../types/cardArtikel";
import "./style.scss";

export default function CardArtikel(props: cardArtikel) {
  const { srcImg, titleArtikel, descArtikel, dateArtikel } = props;

  return (
    <div>
      <div className="cardArtikel">
        <img src={srcImg} alt="Artikel" className="cardArtikel__imgArtikel" />
        <div className="cardArtikel__imgArtikel__descArtikel">
          <h2>{titleArtikel}</h2>
          <p>{descArtikel.substring(0, 100)} ...</p>
          <h4>{dateArtikel}</h4>
          <div>
            <Button
              btnType="button"
              btnTitle="Baca Selengkapnya"
              handleClick={() => false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
