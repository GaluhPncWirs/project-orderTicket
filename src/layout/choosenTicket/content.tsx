import { useState } from "react";
import "./style.scss";

type choosenTicketProps = {
  nameTicket: string;
  priceTicket: string;
  benefit: string[];
  remainingTicket: number;
};

export default function ChoosenTicket(props: choosenTicketProps) {
  const { nameTicket, priceTicket, benefit, remainingTicket } = props;
  const [qtyTicket, setQtyTicket] = useState<number>(0);

  return (
    <div className="containerChooseTicket">
      <div className="containerChooseTicket__descTicket">
        <h2>{nameTicket}</h2>
        <h3>Rp.{priceTicket}</h3>
        <ul>
          {benefit.map((item, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="horizontalLine" />
      <div className="containerChooseTicket__qtyTicket">
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
      <h3 className="containerChooseTicket__remainingTicket">
        Sisa {remainingTicket - qtyTicket} Tiket
      </h3>
    </div>
  );
}
