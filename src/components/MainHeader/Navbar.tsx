import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="box flex justify-between items-center p-3 font-Poppins shadow-md">
      <h3 className="text-gray-800 text-xl cursor-pointer block font-bold my-3 px-10">
        Felipe.dev
      </h3>
      <nav className="flex gap-6 font-semibold text-base p-4 pr-16">
        <a href="/#" className="hover:text-[#075df5]">
          Home
        </a>
        <a href="/#" className="hover:text-[#075df5]">
          About
        </a>
        <a href="/#" className="hover:text-[#075df5]">
          Projects
        </a>
        <a href="/#" className="hover:text-[#075df5]">
          Contact
        </a>
      </nav>
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