import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

export function TechStack() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 justify-center text-2xl leading-6 space-x-1 py-14">
      <span className="flex justify-center">Tech Stack |</span>
      <div className="flex flex-wrap justify-center items-center space-x-1 py-2 md:py-0">
        <FaHtml5 class="fill-red-500" />
        <FaCss3Alt class="fill-blue-500" />
        <SiJavascript class="fill-yellow-400" />
        <SiTailwindcss class="fill-blue-400" />
        <FaReact class="fill-blue-500" />
      </div>
    </div>
  );
}
