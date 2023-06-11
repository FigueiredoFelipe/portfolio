import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiJavascript } from "react-icons/si";

export function TechStack() {
  return (
    <div className="flex bg-gray-100 justify-center text-[1.5rem] leading-6 space-x-3 p-14">
      <p>Tech Stack |</p>
      <FaHtml5 />
      <FaCss3Alt />
      <SiJavascript />
      <SiTailwindcss />
      <FaBootstrap />
      <FaReact />
    </div>
  );
}
