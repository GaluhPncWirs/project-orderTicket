import "./style.scss";
import TextSidebarClick from "../../../layout/textSidebar/content";

export default function City() {
  return (
    <TextSidebarClick
      imgSrc="/images/concertPage/city.png"
      imgAlt="Kota"
      textContent="Kota"
      subTextContent="Pilih Kota"
    >
      <ul className="containerChoosenCity__listCity">
        <li>
          <input type="checkbox" />
          <h4>Jakarta</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Bandung</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Surabaya</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Yogyakarta</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Semarang</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Medan</h4>
        </li>
      </ul>
    </TextSidebarClick>
  );
}
