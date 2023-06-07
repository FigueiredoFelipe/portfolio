// import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <header className="box flex justify-between items-center p-3 font-Poppins">
      <h3 className="text-gray-800 text-xl cursor-pointer block font-bold my-3 px-10">
        Felipe.dev
      </h3>
      <nav
        className="flex gap-6 font-semibold text-base p-4 pr-16" /*ref={navRef}*/
      >
        <a href="/#" className="hover:text-blue-500">
          Home
        </a>
        <a href="/#" className="hover:text-blue-500">
          About
        </a>
        <a href="/#" className="hover:text-blue-500">
          Projects
        </a>
        <a href="/#" className="hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
}

{
  /* <button> */
}
<FaTimes className="nav-btn nav-close-btn" /*onclick={showNavbar}*/ />;
// </button>

{
  /* <button> */
}
<FaBars className="nav-btn" /*onclick={showNavbar}*/ />;
{
  /* </button> */
}
