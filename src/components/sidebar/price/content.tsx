import { useState } from "react";
import "./style.scss";
import TextSidebarClick from "../../../layout/textSidebar/content";

export default function Price() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 10_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(100_000);
  const [editabelMinPrice, setEditabelMinPrice] = useState<number>(MIN_PRICE);

  const formatRupiah = (value: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // console.log(formatRupiah(editabelMinPrice));

  return (
    <TextSidebarClick
      imgSrc="/images/concertPage/price.png"
      imgAlt="Harga"
      textContent="Harga"
      subTextContent="Rentang Harga"
      onApply={() => console.log("Apply clicked")}
    >
      <div className="rangePrice">
        <div className="rangePrice__price">
          <div>
            <span>Rp.</span>
            <input
              type="number"
              defaultValue={MIN_PRICE}
              onChange={(e) => setEditabelMinPrice(Number(e.target.value))}
            />
          </div>
          {"-"}
          <span>{formatRupiah(rangePriceValue)}</span>
        </div>
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={50_000}
          value={rangePriceValue}
          onChange={(e) => setRangePriceValue(Number(e.target.value))}
        />
      </div>
    </TextSidebarClick>
  );
}
