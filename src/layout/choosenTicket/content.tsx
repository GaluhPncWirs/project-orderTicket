import { useState } from "react";
import "./style.scss";

type choosenTicketProps = {
  nameTicket: string;
  priceTicket: string;
  benefit: string[];
  remainingTicket: number;
};

export default function ChoosenTicket(props: choosenTicketProps) {
  const { nameTicket, priceTicket, benefit = [], remainingTicket } = props;
  const [qtyTicket, setQtyTicket] = useState<number>(0);

  return (
    <div className="containerChooseTicket">
      <div className="containerChooseTicket__header">
        <h1>{nameTicket}</h1>
        <div className="containerChooseTicket__header__qtyTicket">
          <span
            onClick={() =>
              setQtyTicket((prev) => {
                if (prev <= 0) {
                  return 0;
                }
                return prev - 1;
              })
            }
          >
            -
          </span>
          <h4>{qtyTicket}</h4>
          <span
            onClick={() =>
              setQtyTicket((prev) => {
                if (prev >= remainingTicket) {
                  return remainingTicket;
                }
                return prev + 1;
              })
            }
          >
            +
          </span>
        </div>
      </div>
      <div className="containerChooseTicket__desc">
        <div className="containerChooseTicket__desc__benefit">
          <h2>Rp.{priceTicket}</h2>
          <ul>
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
          </ul>
        </div>
        <h2>Sisa {remainingTicket - qtyTicket} Tiket</h2>
      </div>
    </div>
  );
}
