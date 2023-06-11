import "./AboutMe.css";

export function AboutMe() {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex py-12">
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg h-[18rem] w-[26rem]"
              src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
              alt=""
            />
          </div>
          <div className="max-w-[30rem]  p-[1.5rem]">
            <h1 className="text-blue-500 font-extrabold text-base">ABOUT ME</h1>
            <h4 className="font-extrabold text-[1.6rem]">
              A dedicated Front-end React Developer based in Belo Horizonte,
              Brazil.
            </h4>
            <p className="text-gray-500">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
