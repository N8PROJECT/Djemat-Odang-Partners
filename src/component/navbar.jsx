import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/brand_Logo/DOP Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 backdrop-blur-lg ${
        isScrolled ? "bg-white/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
        <img src={Logo} alt="Djemat Odang & Partners" className="h-40 w-auto" />

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          {["Home", "About Us", "Services", "Team", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-black/80 shadow-md flex flex-col items-center py-4 space-y-4 text-white">
          {["Home", "About Us", "Services", "Team", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
