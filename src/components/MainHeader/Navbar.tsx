import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="container flex flex-wrap justify-between p-3 font-Poppins shadow-md max-w-full">
      <div className="container flex flex-wrap">
        <h3 className="text-gray-800 text-xl cursor-pointer font-bold my-3 px-10">
          Felipe.dev
        </h3>
        <nav className="flex gap-6 font-semibold text-base p-4 max-w-fulln ml-auto items-end">
          <a href="#home" className="hover:text-[#075df5] cursor-pointer">
            Home
          </a>
          <a href="#about" className="hover:text-[#075df5] cursor-pointer">
            About
          </a>
          <a href="#portfolio" className="hover:text-[#075df5] cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#075df5] cursor-pointer">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

{
  /* <button> */
}
<FaTimes className="nav-btn nav-close-btn" /*onclick={}*/ />;
// </button>

{
  /* <button> */
}
<FaBars className="nav-btn" /*onclick={showNavbar}*/ />;
{
  /* </button> */
}
