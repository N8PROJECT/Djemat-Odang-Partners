import PatternBg from "../assets/Pattern Background/Pattern 2.png";
import ImageCarousel from "./ImageCarousel";

// Import PNG icons
import balance from "../assets/Vission & Mission Icon/balance.png";
import chain from "../assets/Vission & Mission Icon/chain.png";
import handShake from "../assets/Vission & Mission Icon/hand-shake.png";
import star from "../assets/Vission & Mission Icon/star.png";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative flex flex-col items-center justify-start min-h-screen py-20"
    >
      {/* Left background pattern */}
      <div
        className="absolute top-0 left-0 w-[20%] sm:w-[30%] md:w-[20%] lg:w-[20%] xl:w-[20%] h-full bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${PatternBg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Gradient overlay to blend pattern into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
      </div>

      {/* Image Carousel (Centered) */}
      <div className="relative z-10 w-full max-w-4xl flex justify-center">
        <ImageCarousel />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto px-6 w-full items-center mt-10 space-y-6 md:space-y-0 md:gap-10">
        {/* Left Text Section - Why Choose Us */}
        <div className="md:w-1/2 bg-[#5B2245] text-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="font-bold uppercase text-xl">
            Why You Should Choose Us
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Djemat Odang and Partners is a leading law firm based in Jakarta,
            Indonesia. Founded with a commitment to delivering high-quality
            legal services, the firm has grown into one of the most respected in
            the industry. With a team of experienced and dedicated lawyers,
            Djemat Odang and Partners provides a comprehensive range of legal
            services, including litigation, arbitration, legal consulting, and
            dispute resolution. We take pride in our client-focused approach,
            ensuring that each client receives personalized legal attention and
            tailored solutions to meet their needs.
          </p>
        </div>

        {/* Right Text Section - Vision & Mission */}
        <div className="md:w-1/2 bg-[#D1A43F] text-black p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="font-bold uppercase text-xl">Vision & Mission</h2>
          <p className="mt-4 text-base leading-relaxed">
            To be a leading law firm in Indonesia, recognized for our integrity,
            professionalism, and dedication to providing innovative and
            effective legal solutions
          </p>

          {/* Icons List */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3">
              <img src={handShake} alt="Handshake" className="w-6 h-6" />
              <span>Deliver high-quality, results-driven legal services</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={chain} alt="Chain" className="w-6 h-6" />
              <span>Build long-term client relationships</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={balance} alt="Balance Scale" className="w-6 h-6" />
              <span>Contribute to legal advancement</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={star} alt="Star" className="w-6 h-6" />
              <span>Uphold the highest ethical standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
