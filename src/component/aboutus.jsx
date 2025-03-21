import ImageCarousel from "./ImageCarousel";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative flex flex-col items-center justify-start min-h-[120vh] md:min-h-screen py-20"
    >
      {/* Left background pattern */}
      <div 
  className="absolute top-0 left-0 w-[20%] h-screen md:h-full bg-no-repeat bg-left z-0"

        style={{
          backgroundImage: `url('/Assets/Pattern Background/Pattern 2.png')`,
          backgroundSize: "cover",
        }}
      >
        {/* Gradient overlay to blend pattern into white */}
        <div className="absolute inset-0 bg-gradient-to-r "></div>
      </div>

      {/* Image Carousel (Centered) */}
      <div className="relative w-full flex justify-center items-center overflow-visible">
  <ImageCarousel />
</div>


      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto px-6 w-full items-center mt-10 space-y-6 md:space-y-0 md:gap-10">
        {/* Left Text Section - Why Choose Us */}
        <div
  className="w-full md:w-[65%] bg-[#5B2245] text-white p-8 md:p-10 
  shadow-xl border border-white border-opacity-20 md:mr-10 
  md:relative md:-left-20"
>
  <h2 className="font-bold uppercase text-xl md:text-2xl">
    Why You Should Choose Us
  </h2>
  {/* Yellow Underline */}
  <div className="w-16 h-[3px] bg-[#D1A43F] mt-2"></div>

  <p className="mt-4 text-base md:text-lg leading-relaxed">
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
        <div
          className="md:w-[55%] bg-[#D1A43F] text-black p-8 md:p-10 
  shadow-xl border border-black border-opacity-20 
  md:relative md:left-20"
        >
          <h2 className="font-bold uppercase text-xl text-center">
            Vision & Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-center">
            To be a leading law firm in Indonesia, recognized for our integrity,
            professionalism, and dedication to providing innovative and
            effective legal solutions.
          </p>

          {/* Icons List */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/Assets/Vission & Mission Icon/hand-shake.png"
                alt="Handshake"
                className="w-7 h-7"
              />
              <span className="text-lg">
                Deliver high-quality, results-driven legal services to our
                clients️.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Assets/Vission & Mission Icon/chain.png"
                alt="Chain"
                className="w-7 h-7"
              />
              <span className="text-lg">
                Build long-term client relationships based on trust and
                satisfaction.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Assets/Vission & Mission Icon/star.png"
                alt="Star"
                className="w-7 h-7"
              />
              <span className="text-lg">
                Develop a team of skilled and dedicated lawyers through
                continuous training and professional development.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Assets/Vission & Mission Icon/balance.png"
                alt="Balance Scale"
                className="w-7 h-7"
              />
              <span className="text-lg">
                Contribute to the advancement of law in Indonesia through active
                participation in the legal community and social initiatives.
              </span>
            </div>
          </div>

          {/* Bottom Core Values Section */}
          <div className="mt-6 pt-4 border-t border-black text-center font-bold text-sm">
            INTEGRITY • PROFESSIONALISM • INNOVATION <br />
            COLLABORATION • CLIENT COMMITMENT
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
