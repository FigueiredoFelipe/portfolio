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
        <div className="text-white flex space-x-2 pl-20">
          <FaLinkedin class="home-icon fill-white" />
          <FaGithubSquare class="home-icon fill-white" />
        </div>
      </footer>
    </>
  );
}
