import "./style.scss";
import TextSidebarClick from "../../../layout/textSidebar/content";

export default function Genre() {
  return (
    <TextSidebarClick
      imgSrc="/images/concertPage/genre.png"
      imgAlt="Genre"
      textContent="Genre"
      subTextContent="Pilih Genre"
      onApply={() => console.log("Apply clicked")}
    >
      <ul className="listGenre">
        <li>
          <input type="checkbox" />
          <h4>Pop</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Rock</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>EDM</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Jazz</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>K-Pop</h4>
        </li>
        <li>
          <input type="checkbox" />
          <h4>Hip-Hop</h4>
        </li>
      </ul>
    </TextSidebarClick>
  );
}
