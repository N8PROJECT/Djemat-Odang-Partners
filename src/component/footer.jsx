import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#6C264B] text-white py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
        {/* Bagian Kiri */}
        <div className="mb-6 md:mb-0 space-y-2 text-center md:text-left">
          <img src="/Assets/Brand Logo/DOP Logo.png" alt="Logo" className="h-20 mx-auto md:mx-0 mb-4" />
          <p className="text-sm">Jl. Jend. Sudirman Kav 52-53, <br></br> 17th Floor Indonesia Stock Exchange, Tower 2 Jakarta</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} 2025 All Rights Reserved.</p>
        </div>

        {/* Bagian Kanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full md:w-3/5 text-center md:text-left">
          {/* Contact Us */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg mb-4 tracking-wide">Contact</h3>
            <p className="text-sm flex justify-center md:justify-start items-center gap-2"><FaPhoneAlt /> +62 815-8776-788</p>
          <p className="text-sm flex justify-center md:justify-start items-center gap-2"><FaEnvelope /> info@doplawfirm.com</p>
            <a href="https://instagram.com" className="flex justify-center md:justify-start items-center gap-2 text-sm">
              <FaInstagram /> @dop.lawfirm
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wide">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wide">Legal</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
