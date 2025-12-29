import type React from "react";
import NavigationBar from "../components/navbar/content";
import Footer from "../components/footer/content";

export default function RootContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="globalContainer">
      <div className="rootContainer">
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
