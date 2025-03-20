import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent backdrop-blur-lg");

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection) {
        const rect = aboutUsSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setNavBg(
            "bg-[#6C264B]/70 backdrop-blur-md transition-all duration-700"
          );
        } else {
          setNavBg(
            "bg-transparent backdrop-blur-lg transition-all duration-700"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 shadow-lg ${navBg}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo (Resized as per request) */}
        <div className="flex items-center">
          <img
            src="/Assets/Brand Logo/DOP Logo.png"
            alt="Djemat Odang & Partners"
            className="h-20 w-auto" // Reduced from h-40 to h-16
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-white text-lg">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about-us" },
            { name: "Services", href: "#services" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <li key={link.name}>
              <a
  href={link.href}
  onClick={(e) => {
    e.preventDefault();
    const section = document.querySelector(link.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="hover:text-yellow-500 transition-colors cursor-pointer"
>
  {link.name}
</a>

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
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about-us" },
            { name: "Services", href: "#services" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                className="hover:text-yellow-500 transition-colors cursor-pointer text-lg block py-2"
                onClick={() => setIsOpen(false)} // Close menu after clicking a link
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;