import type React from "react";
import NavigationBar from "../components/navbar/content";

export default function RootContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="globalContainer">
      <div className="rootContainer">
        <NavigationBar />
        {children}
      </div>
    </div>
  );
}
