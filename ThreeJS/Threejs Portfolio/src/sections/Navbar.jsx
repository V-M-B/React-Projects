import React, { useState } from "react";
import { div } from "three/tsl";
import { navLinks } from "../constants";

const NavItems=({})=>{
  return(
    <ul className="nav-ul">
      { navLinks.map((link)=>(
        <li key={NavItems.id} className="nav-li">
 
        </li>
      

      ))}
      </ul>
  )
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-sky-400 font-bold text-xl hover:text-white transition-colors"
          >
            V M B
          </a>

          <button onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus-bold text-xl transition-colors"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toogle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
}
