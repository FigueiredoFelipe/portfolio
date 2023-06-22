import { forwardRef } from "react";
import ho1Image from "../UI/img/ho1-2-410px.png";

export const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto justify-center w-full">
        <div className="flex flex-col md:flex-row max-w-full justify-center items-center">
          <div className="container mx-auto max-w-full flex flex-col md:flex-row w-full md:w-8/12 px-4">
            <div className="flex w-full justify-center items-center md:order-2 p-6">
              <img
                className="rounded-lg h-auto max-h-56"
                src={ho1Image}
                alt="home office desk"
              />
            </div>
            <div className="max-w-lg md:order-1">
              <h1 className="text-blue-500 font-extrabold text-lg">
                PORTFOLIO
              </h1>
              <h4 className="font-extrabold text-2xl">
                Each project is a unique piece of development🧩
              </h4>
              <p className="text-gray-500 py-3">
                As a Front-End Developer, I possess an impressive arsenal of
                skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in
                designing and maintaining responsive websites that offer a
                smooth user experience. My expertise lies in crafting dynamic,
                engaging interfaces through writing clean and optimized code and
                utilizing cutting-edge development tools and techniques. I am
                also a team player who thrives in collaborating with
                cross-functional teams to produce outstanding web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
