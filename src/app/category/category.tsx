import { Link, useParams } from "react-router";
import RootContainer from "../../layout/rootContainer";

export default function Category() {
  const { idProd } = useParams();
  // const [count, setCount] = useState(0);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { idProd } = useParams();

  // function handleSearchParams(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const targetInput = event.target as HTMLFormElement;
  //   const valueInput = targetInput.searchParam.value;
  //   navigate(`/category/${valueInput}`);
  // }
  return (
    <RootContainer>
      <div>katogory satu {idProd}</div>
      {/* <form
        className="containerSearchParam"
        onSubmit={(e) => handleSearchParams(e)}
      >
        <div className="inputSearch">
          <label htmlFor="searchParam" className="inputSearch__label">
            Cari Produk
          </label>
          <input type="text" className="inputSearch__input" id="searchParam" />
        </div>
        <Button btnType="submit" btnTitle="Cari" />
      </form> */}

      <Link to="/">Kembali</Link>
    </RootContainer>
  );
}
