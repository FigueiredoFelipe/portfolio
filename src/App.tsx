import { useRef } from "react";
import "./App.css";

import { Navbar } from "./components/MainHeader/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <button
        className="justify-center flex items-center"
        onClick={handleClick}
      >
        CLICK TESTER
      </button>
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact ref={ref} />
      <Footer />
    </>
  );
}

export default App;
