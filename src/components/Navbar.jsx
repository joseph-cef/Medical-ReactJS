import { useState } from "react";
import { Link } from "react-scroll";
import { Contact } from "../models/Contact";

// الايقونات تاع ال منيو
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../layouts/Button";  

export const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full z-50 bg-green-300/80 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
         <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Wellness<span className="text-blue-700">Vista</span>
          </Link>
        </div>

         <nav className="hidden lg:flex gap-6 text-gray-700 font-medium">
          {["home", "about", "services", "doctors", "blogs"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-all cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

         <div className="hidden lg:flex">
          <Button title="Contact Us" onClick={openForm} />
        </div>

         <div className="lg:hidden text-3xl text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

       {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6  bg-green-300/0 py-6 shadow-md">
          {["home", "about", "services", "doctors", "blogs"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="text-gray-700 text-lg font-medium hover:text-blue-500 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <Button title="Contact Us" onClick={() => { openForm(); closeMenu(); }} />
        </div>
      )}

       {showForm && <Contact closeForm={closeForm} />}
    </header>
  );
};
