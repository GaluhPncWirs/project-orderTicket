import type React from "react";
import { useNavigate } from "react-router";
import RootContainer from "../../layout/rootContainer";
// import { useParams } from "react-router";

export default function HomePage() {
  // const [count, setCount] = useState(0);
  const navigate = useNavigate();
  // const location = useLocation();
  // const { idProd } = useParams();

  function handleSearchParams(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const targetInput = event.target as HTMLFormElement;
    const valueInput = targetInput.searchParam.value;
    navigate(`/category/${valueInput}`);
  }

  return (
    <RootContainer>
      <form
        className="containerSearchParam"
        onSubmit={(e) => handleSearchParams(e)}
      >
        <div className="inputSearch">
          <label htmlFor="searchParam" className="inputSearch__label">
            Cari Produk
          </label>
          <input type="text" className="inputSearch__input" id="searchParam" />
        </div>
        <button className="btnSearch" type="submit">
          Cari
        </button>
      </form>
    </RootContainer>
  );
}
