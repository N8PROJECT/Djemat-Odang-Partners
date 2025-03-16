import PatternBg from "../assets/Pattern Background/Pattern 2.png";
import ImageCarousel from "./ImageCarousel";

const AboutUs = () => {
  return (
    <section id="about-us" className="relative flex flex-col items-center justify-start min-h-screen py-20">


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

      {/* Image Carousel (placed at the top) */}
      <div className="relative z-10 w-full max-w-4xl">
        <ImageCarousel />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto px-6 w-full items-center mt-8">
        {/* Left Text Section */}
        <div className="md:w-1/2 bg-primary text-white p-6">
          <h2 className="font-bold uppercase">Why You Should Choose Us</h2>
          <p>
            Djemat Odang and Partners is a leading law firm based in Jakarta,
            Indonesia...
          </p>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 bg-gold text-black p-6">
          <h2 className="font-bold uppercase">Vision & Mission</h2>
          <p>
            To be a leading law firm in Indonesia, recognized for our
            integrity...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
