import { Outlet } from "react-router";
import "./App.css";
import NavbarSection from "./components/global/NavbarSection";
import FooterSection from "./components/global/FooterSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto w-full h-screen flex flex-col">
      <NavbarSection></NavbarSection>
      <div className="w-full py-10"></div>
      <div className="flex-1 bg-green-100 w-full">
        <Outlet></Outlet>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
