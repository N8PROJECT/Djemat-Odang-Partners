// import { useState } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full bg-black bg-opacity-80 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src="/Assets/Brand Logo/DOP Logo.png" alt="Logo" className="h-14 w-auto" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-white text-lg">
//           <li>
//             <Link to="home" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">Home</Link>
//           </li>
//           <li>
//             <Link to="about" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">About Us</Link>
//           </li>
//           <li>
//             <Link to="services" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">Services</Link>
//           </li>
//           <li>
//             <Link to="clients" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">Clients</Link>
//           </li>
//           <li>
//             <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">Contact</Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-black bg-opacity-90 text-white text-lg flex flex-col items-center space-y-4 py-4">
//           <li>
//             <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer">Home</Link>
//           </li>
//           <li>
//             <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer">About Us</Link>
//           </li>
//           <li>
//             <Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer">Services</Link>
//           </li>
//           <li>
//             <Link to="clients" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer">Clients</Link>
//           </li>
//           <li>
//             <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer">Contact</Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;











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
          setNavBg("bg-[#6C264B]/70 backdrop-blur-md transition-all duration-700"); 
        } else {
          setNavBg("bg-transparent backdrop-blur-lg transition-all duration-700");
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 shadow-lg ${navBg}`}>
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



























// =============================================






// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [navBg, setNavBg] = useState("bg-transparent");

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutUsSection = document.getElementById("about-us");
//       if (aboutUsSection) {
//         const rect = aboutUsSection.getBoundingClientRect();
//         if (rect.top <= 50 && rect.bottom >= 50) {
//           setNavBg("bg-[#6C264B]/70 backdrop-blur-md"); 
//         } else {
//           setNavBg("bg-transparent backdrop-blur-lg");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 shadow-md ${navBg}`}
//     >
//       <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
//         {/* Logo (Fixed Path) */}
//         <div className="flex items-center">
//           <img 
//             src="/Assets/Brand Logo/DOP Logo.png" 
//             alt="Djemat Odang & Partners" 
//             className="h-40 w-auto" 
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white">
//           {["Home", "About Us", "Services", "Team", "Contact"].map((item) => (
//             <li
//               key={item}
//               className="hover:text-yellow-500 transition-colors cursor-pointer"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden absolute top-16 left-0 w-full bg-[#6C264B] z-50 shadow-md flex flex-col items-center py-4 space-y-4 text-white">
//           {["Home", "About Us", "Services", "Team", "Contact"].map((item) => (
//             <li
//               key={item}
//               className="hover:text-yellow-500 transition-colors cursor-pointer text-lg w-full text-center"
//               onClick={() => setIsOpen(false)} // Close menu on click
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
