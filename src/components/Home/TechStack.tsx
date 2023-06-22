import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

export function TechStack() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 justify-center text-2xl leading-6 space-x-1 pt-0 pb-2 md:pb-20">
      <span className="flex justify-center">Tech Stack |</span>
      <div className="flex flex-wrap justify-center items-center space-x-1 py-2 md:py-0">
        <FaHtml5 class="fill-red-500 cursor-pointer" />
        <FaCss3Alt class="fill-blue-500 cursor-pointer" />
        <SiJavascript class="fill-yellow-400 cursor-pointer" />
        <SiTailwindcss class="fill-blue-400 cursor-pointer" />
        <FaReact class="fill-blue-500 cursor-pointer" />
      </div>
    </div>
  );
}
