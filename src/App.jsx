import { useState } from "react";
import Navbar from "./component/navbar";
import Home from "./component/home";
import AboutUs from "./component/aboutus";
import Service from "./component/service";
import Peoples from "./component/peoples";
import Clients from "./component/clients";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <AboutUs />
        <Service />
        <div className="relative">
          {/* Background Image */}
          <div
            className="absolute top-0 right-0 w-[100px] md:w-[200px] lg:w-[300px] h-full bg-no-repeat bg-cover bg-right"
            style={{
              backgroundImage:
                "url('/Assets/Pattern Background/Pattern 2.png')",
            }}
          ></div>

          {/* Sections */}
          <Peoples />
          <Clients />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
