import { useEffect, useRef, useState } from "react";
import "./style.scss";
import SearchInput from "../../searchInput/content";

export default function City() {
  const [isOpen, setIsOpen] = useState(false);
  const choosenCity = useRef<any>(null);

  useEffect(() => {
    function handleClickOutsideComponent(event: any) {
      if (choosenCity.current && !choosenCity.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () =>
      document.removeEventListener("click", handleClickOutsideComponent);
  }, []);

  return (
    <div className="textList" ref={choosenCity}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="btnTrigger">
          <img src="/images/concertPage/city.png" alt="Kota" />
          <h4>Kota</h4>
        </div>
        <div className={`arrow ${isOpen && `turnBottom`}`}>
          <div />
          <div />
        </div>
      </button>
      <div className={`containerChoosenCity ${isOpen && `showContent`}`}>
        <h4>Pilih Kota</h4>
        <SearchInput />
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
      </div>
    </div>
  );
}
