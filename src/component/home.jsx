const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img 
        src="/Assets/Background/view-building-architecture-london-city.jpg"  
        alt="Background" 
        className="absolute min-w-full min-h-full object-cover"
      />

      {/* Softer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C264B]/80 to-[#F3EDE1]/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Updated Text */}
        <h1 className="text-[35px] font-bold leading-none font-ibm">
          <span className="font-semibold">Defend</span> rights.{" "}
          <span className="font-semibold">Overcome</span> challenges.{" "}
          <span className="font-semibold">Protect</span> justice.
        </h1>

        {/* Button with External Link */}
        <a href="https://wa.me/+628158776788" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-[#6C264B] transition">
            GET IN TOUCH
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;