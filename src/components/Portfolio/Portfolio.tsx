import { forwardRef } from "react";

export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="bg-gray-100 flex justify-center" ref={ref}>
      <div className="container mx-auto py-12 max-w-full w-full md:w-3/5 p-4">
        <h1 className="text-blue-500 font-extrabold text-lg">PORTFOLIO</h1>
        <h2 className="font-bold text-2xl">
          Each project is a unique piece of development🧩
        </h2>
        <p className="text-gray-500 py-3">
          As a Front-End Developer, I possess an impressive arsenal of skills in
          HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
          and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications. A list of projects will be driven soon.
        </p>
      </div>
    </div>
  );
});
