import { Link, useParams } from "react-router";
import RootContainer from "../../layout/rootContainer";

export default function Category() {
  const { idProd } = useParams();
  return (
    <RootContainer>
      <div>katogory satu {idProd}</div>
      <Link to="/">Kembali</Link>
    </RootContainer>
  );
}
