import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection) {
        const rect = aboutUsSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setNavBg("bg-[#6C264B]/70 backdrop-blur-md"); 
        } else {
          setNavBg("bg-transparent backdrop-blur-lg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 shadow-md ${navBg}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo (Fixed Path) */}
        <div className="flex items-center">
          <img 
            src="/assets/Brand Logo/DOP Logo.png" 
            alt="Djemat Odang & Partners" 
            className="h-40 w-auto" 
          />
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
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-[#6C264B] z-50 shadow-md flex flex-col items-center py-4 space-y-4 text-white">
          {["Home", "About Us", "Services", "Team", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-500 transition-colors cursor-pointer text-lg w-full text-center"
              onClick={() => setIsOpen(false)} // Close menu on click
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
