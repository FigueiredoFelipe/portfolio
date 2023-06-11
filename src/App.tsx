import "./App.css";

import { Navbar } from "./components/MainHeader/Navbar";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />

      <div className="bg-gray-100">
        <div>
          <h1>PORTFOLIO</h1>
          <h2>Each project is a unique piece of development🧩</h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>

      <div>
        <div>
          <h1>CONTACT</h1>
          <h2>Don't be shy! Hit me up! 👇</h2>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
