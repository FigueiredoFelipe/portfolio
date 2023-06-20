import { forwardRef } from "react";

export const AboutMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="flex justify-center" id="about" ref={ref}>
      <div className="container mx-auto py-16 max-w-full flex flex-col md:flex-row w-full md:w-3/5 px-4">
        <div className="flex items-center justify-center md:order-2 p-6">
          <img
            className="rounded-lg h-[18rem] w-[26rem] md:w-auto md:h-auto"
            src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt=""
          />
        </div>
        <div className="max-w-[30rem] md:order-1">
          <h1 className="text-blue-500 font-extrabold text-lg">ABOUT ME</h1>
          <h4 className="font-extrabold text-2xl">
            A dedicated Front-end React Developer based in Belo Horizonte,
            Brazil.
          </h4>
          <p className="text-gray-500">
            As a Front-End Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, and Tailwind. I excel in designing
            and maintaining responsive websites that offer a smooth user
            experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
});
