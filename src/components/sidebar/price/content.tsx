import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../../button/content";
import "./style.scss";

export default function Price() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 10_000_000;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const choosenPrice = useRef<any>(null);
  const [rangePriceValue, setRangePriceValue] = useState(100_000);

  useEffect(() => {
    function handleClickOutsideComponent(event: any) {
      if (
        choosenPrice.current &&
        !choosenPrice.current.contains(event.target)
      ) {
        setIsOpen(true);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () => {
      document.removeEventListener("click", handleClickOutsideComponent);
    };
  }, []);

  const formatRupiah = (value: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div ref={choosenPrice}>
      <button onClick={() => setIsOpen(!isOpen)} className="btnTrigger">
        <div className="btnTrigger__textContent">
          <img src="/images/concertPage/price.png" alt="Harga" />
          <h4>Harga</h4>
        </div>
        <ChevronRight className={`arrow ${isOpen && `turnBottom`}`} />
      </button>
      <div className={`containerRangePrice ${isOpen && `showContent`}`}>
        <h4>Rentang Harga</h4>
        <span className="horizontalLine" />
        <div className="containerRangePrice__content">
          <div>
            <span>{formatRupiah(MIN_PRICE)}</span>
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
        <span className="horizontalLine" />
        <Button
          btnTitle="Terapkan"
          btnType="button"
          handleClick={() => false}
        />
      </div>
    </div>
  );
}
