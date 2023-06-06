import { useState } from "react";

import {
  FaLinkedinIn,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

import { Header } from "./components/MainHeader/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#555" }}>
        <div>
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Felipe Figueiredo. A passionate Front-end React Developer
            based in Belo Horizonte, Brazil.
          </p>
          <FaLinkedinIn />
          <FaGithub />
        </div>
        <div>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEIVJnHZV2jJQ/profile-displayphoto-shrink_200_200/0/1683295089907?e=1691625600&v=beta&t=C3H4Kle9mZ7WKyX1gOFZ7iD9zOKf1h0NUW7gBPLm8YM"
            alt=""
          />
        </div>
        <div>
          <div>
            <p>Tech Stack</p>
          </div>
          <div>
            <FaHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <SiTailwindcss />
            <FaBootstrap />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>About me</h1>
          <h2>
            A dedicated Front-end React Developer based in Belo Horizonte,
            Brazil.
          </h2>
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

      <div style={{ backgroundColor: "#555" }}>
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

      <footer>Copyright © 2023. All rights are reserved</footer>
    </>
  );
}

export default App;
