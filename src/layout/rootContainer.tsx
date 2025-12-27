import type React from "react";
import NavigationBar from "../components/navbar/content";
import Counter from "../components/counter/content";

export default function RootContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="rootContainer">
      <NavigationBar />
      <div>{children}</div>
      <Counter />
    </div>
  );
}
