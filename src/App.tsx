import "./App.css";

import { Navbar } from "./components/MainHeader/Navbar";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
