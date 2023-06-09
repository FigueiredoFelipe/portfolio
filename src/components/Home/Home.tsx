import "./Home.css";

import {
  FaLinkedin,
  FaGithubSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

export function Home() {
  return (
    <section className="font-Poppins text-gray-800">
      <div className="bg-gray-100 shadow-inner pt-20 p-12 justify-center">
        <div className="flex justify-center">
          <div className="max-w-[38rem]">
            <h1 className="text-[3.4rem] font-bold pt-12 max-w-[45rem] mb-[1rem] mt-[2rem] leading-[1.2]">
              Front-End React Developer
            </h1>
            <p className="max-w-[30rem] text-[1rem] pb-5">
              Hi, I'm Felipe Figueiredo. A passionate Front-end React Developer
              based in Belo Horizonte, Brazil.
            </p>
            <div className="flex space-x-2">
              <FaLinkedin class="home-icon" />
              <FaGithubSquare class="home-icon" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/D4D03AQEIVJnHZV2jJQ/profile-displayphoto-shrink_200_200/0/1683295089907?e=1691625600&v=beta&t=C3H4Kle9mZ7WKyX1gOFZ7iD9zOKf1h0NUW7gBPLm8YM"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex bg-gray-100 justify-center text-[1.5rem] leading-6 space-x-3">
            <p>Tech Stack |</p>
            <FaHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <SiTailwindcss />
            <FaBootstrap />
            <FaReact />
          </div>
        </div>
      </div>
    </section>
  );
}
