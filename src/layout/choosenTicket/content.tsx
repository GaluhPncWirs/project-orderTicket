import "./style.scss";

export default function ChoosenTicket() {
  return (
    <div className="containerChooseTicket">
      <div className="containerChooseTicket__header">
        <h1>Tiket</h1>
        <div>
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
      </div>
      <div className="containerChooseTicket__desc">
        <div>
          <h2>Rp.XXX.XXX</h2>
          <ul>
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
          </ul>
        </div>
        <h2>Sisa XX Tiket</h2>
      </div>
    </div>
  );
}
