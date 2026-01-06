import { Outlet } from "react-router";
import RootContainer from "../../layout/rootContainer";

export default function ConcertPage() {
  return (
    <RootContainer>
      <div className="containerConcert" style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </RootContainer>
  );
}
