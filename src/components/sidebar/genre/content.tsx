import { useEffect, useRef, useState } from "react";
import "./style.scss";
import Button from "../../button/content";

export default function Genre() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const choosenGenre = useRef<any>(null);

  useEffect(() => {
    function handleClickOutsideComponent(event: any) {
      if (
        choosenGenre.current &&
        !choosenGenre.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () =>
      document.removeEventListener("click", handleClickOutsideComponent);
  }, []);

  return (
    <div ref={choosenGenre}>
      <button onClick={() => setIsOpen(!isOpen)} className="btnTrigger">
        <div className="btnTrigger__textContent">
          <img src="/images/concertPage/genre.png" alt="Kota" />
          <h4>Genre</h4>
        </div>
        <div className={`arrow ${isOpen && `turnBottom`}`}>
          <div />
          <div />
        </div>
      </button>
      <div className={`containerChoosenGenre ${isOpen && `showContent`}`}>
        <h4>Pilih Genre</h4>
        <span className="horizontalLine" />
        <ul className="containerChoosenGenre__listGenre">
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
