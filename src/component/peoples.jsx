import { useState } from "react";
import { motion } from "framer-motion";

const peoples = [
    { 
      id: 1, 
      name: "Othman Nathan Aziz Odang", 
      description: "Othman Managing Partners", 
      profile: "An experienced advocate who has demonstrated exceptional dedication and expertise across various legal fields. He graduated from Parahyangan Catholic University in 2016 and began his career at FKNK Law Firm, where he worked from 2016 to 2020. During this period, he honed his skills in litigation, corporate law, suspension of debt payment obligations (PKPU) & bankruptcy, as well as employment law. In 2021, Othman joined PwC Legal Indonesia, where he worked until 2025. At PwC Legal Indonesia, he broadened his experience by handling a wide range of complex and diverse cases while providing effective legal solutions for clients.", 
      image: "/Assets/Peoples/Othman.jpg" },
    { 
      id: 2, 
      name: "Andhika Djemat", 
      description: "Andhika Partners", 
      profile: "A Founding Partner at Djemat Odang & Partners, a law firm committed to providing high-quality legal services. His career in law and business began during his time at the Faculty of Law, University of Indonesia, demonstrating strong dedication and vision in the industry. Andhika's professional experience began at the law firm Gani Djemat & Partners in 2021, which strengthened his expertise in various aspects of law. \n\nIn 2022, he founded DEKA LEGAL, a company that focuses on legal consulting services in the fields of corporate and commercial law, establishment of legal entities, taxation, management of Intellectual Property Rights (IPR), corporate compliances, and various other types of legal permits. Since the establishment of DEKA LEGAL, Andhika and his team have successfully assisted more than 2,500 entrepreneurs in establishing legal entities, managing permits, and resolving various legal issues, making DEKA LEGAL a trusted partner for the business world in Indonesia.", 
      image: "/Assets/Peoples/Andhika Djemat.jpg" },
    { 
      id: 3, 
      name: "Pasca Emanuelle", 
      description: "Pasca Partners", 
      profile: "A dedicated legal professional with extensive experience in handling a wide range of litigation and corporate legal matters. With a strong background in civil and criminal law, mergers and acquisitions, insolvency, arbitration, intellectual property, as well as white-collar crime and corruption cases, he has built a reputation for delivering strategic legal solutions tailored to clients' needs. \n\nAs a skilled practitioner in litigation, negotiation, and legal advisory, Pasca has successfully managed cases involving commercial disputes, corporate restructuring, compliance and risk management, employment law, investment regulations, and financial crimes. His expertise extends across various industries, including real estate, healthcare, shipping and transportation, energy, and natural resources. \n\nWith a combination of in-depth legal knowledge, practical experience, and a commitment to excellence, Pasca stands as a trusted and competent legal professional within the industry.", 
      image: "/Assets/Peoples/Pasca.jpg" },
];

const Peoples = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
      <section id="team" className="py-16 text-center pt-24">
          {/* Title */}
          <h2 className="text-xl font-bold text-black tracking-wide">PEOPLES</h2>
          <div className="w-16 h-[3px] bg-[#D1A43F] mx-auto mt-1 mb-8"></div>

          {/* People Cards */}
          <div className="flex justify-center gap-40 flex-wrap">
              {peoples.map((person) => (
                  <motion.div
                      key={person.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-[300px] md:w-[344px] lg:w-86 h-[500px] bg-white shadow-xl overflow-hidden group"
                  >
                      {/* Image with Overlay */}
                      <div className="relative w-full h-full">
                          <img
                              src={person.image}
                              alt={person.name}
                              className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-35 group-hover:bg-opacity-60 transition duration-300"></div>
                      </div>
                      {/* Overlay Content */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center p-4 text-white w-[calc(100%-0.5rem)]">
                          <h3 className="text-lg font-semibold mb-0.5">{person.name}</h3>
                          <p className="text-sm text-gray-300 italic">{person.description}</p>
                          <button
                              onClick={() => setSelectedPerson(person)}
                              className="mt-4 bg-[#D1A43F] text-white px-4 py-2 text-xs font-bold transition opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 rounded-[2px]"
                          >
                              View Profile
                          </button>
                      </div>
                  </motion.div>
              ))}
          </div>

          {/* Popup Modal */}
          {selectedPerson && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                onClick={() => setSelectedPerson(null)}
              >
                  <motion.div 
                      className="bg-white w-full max-w-[800px] h-auto max-h-[90vh] p-6 flex flex-col md:flex-row overflow-y-auto"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                  >
                      {/* Left: Image */}
                      <div className="w-full md:w-1/3 md:mr-8 flex">
                        <img src={selectedPerson.image} alt={selectedPerson.name} 
                          className="w-full h-[280px] md:h-full object-cover object-top rounded-lg" 
                      />
                      </div>
                      {/* Right: Info */}
                      <div className="w-full md:w-2/3 flex flex-col justify-start text-left">
                          <h3 className="text-xl font-bold text-black mt-1">{selectedPerson.name}</h3>
                          <p className="text-gray-600 italic mb-3">{selectedPerson.description}</p>
                          {selectedPerson.profile.split("\n\n").map((paragraph, index) => (
                              <p key={index} className="text-gray-700 mb-4 text-sm">{paragraph}</p>
                          ))}
                          <button
                              onClick={() => setSelectedPerson(null)}
                              className="mt-auto bg-[#D1A43F] text-white px-4 py-2 rounded-[2px]"
                          >
                              Close
                          </button>
                      </div>
                  </motion.div>
                </div>
          )}
      </section>
  );
};

export default Peoples;