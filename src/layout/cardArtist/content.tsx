import Button from "../../components/button/content";
import type { dataCardArtist } from "../../types/cardArtist";
import "./style.scss";

export default function CardArtist(props: dataCardArtist) {
  const { srcImg, nameSinger, dateAndPlace, price } = props;

  return (
    <div>
      <div className="cardContainer">
        <div className="cardContainer__cardHeader">
          <img src={srcImg} alt="Card Artist" />
          <h1>{nameSinger}</h1>
        </div>
        <div className="cardContainer__cardDesc">
          <h2>{dateAndPlace}</h2>
          <h3>Mulai Dari Rp.{price}</h3>
          <Button
            btnTitle="Beli Tiket"
            btnType="button"
            handleClick={() => false}
          />
        </div>
      </div>
    </div>
  );
}
