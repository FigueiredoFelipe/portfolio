import {
  FaLinkedinIn,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

export function Home() {
  return (
    <section className="justify-self-center font-Poppins text-gray-800">
      <div className="bg-gray-100 shadow-inner flex pt-20 p-12 justify-center">
        <div className="max-w-[107rem]">
          <h1 className="text-5xl font-extrabold max-w-[30rem] pb-5">
            Front-End React Developer
          </h1>
          <p className="max-w-[30rem] pb-5">
            Hi, I'm Felipe Figueiredo. A passionate Front-end React Developer
            based in Belo Horizonte, Brazil.
          </p>
          <div className="flex space-x-2">
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://media.licdn.com/dms/image/D4D03AQEIVJnHZV2jJQ/profile-displayphoto-shrink_200_200/0/1683295089907?e=1691625600&v=beta&t=C3H4Kle9mZ7WKyX1gOFZ7iD9zOKf1h0NUW7gBPLm8YM"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex bg-gray-100">
            <p>Tech Stack</p>
            <FaHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <SiTailwindcss />
            <FaBootstrap />
            </div>
      </div>
    </section>
  );
}
