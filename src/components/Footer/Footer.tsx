import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
export function Footer() {
  return (
    <>
      <footer className="bg-gray-800 font-extrabold flex justify-center items-center p-12">
        <div className="max-w-[50rem]">
          <p className="text-white">
            Copyright © 2023. All rights are reserved
          </p>
        </div>
        <div className="text-2xl text-white flex space-x-2 pl-20">
          <FaLinkedin class="fill-white hover:scale-125 duration-300" />
          <FaGithubSquare class="fill-white hover:scale-125 duration-300" />
        </div>
      </footer>
    </>
  );
}
