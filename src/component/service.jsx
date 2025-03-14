import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    { id: 1, title: "Litigation", description:"We handle various civil and criminal cases, including dispute resolution both in and out of court. Our litigation team has extensive experience in managing complex and diverse cases, ranging from commercial disputes to criminal cases. We provide assistance in filing police reports and assistance at the police or prosecutor's office.", image: "/Assets/Service Icon/litigation.png" },
    { id: 2, title: "Corporate Law", description:"We offer comprehensive corporate legal services, including drafting and reviewing contracts, assisting in mergers and acquisitions (M&A) transactions, conducting legal due diligence, and ensuring regulatory compliance.", image: "/Assets/Service Icon/corporate-laws.png" },
    { id: 3, title: "Debt Restructuring & Bankruptcy", description:"We act as legal advisors for debtors and creditors in Suspension of Debt Payment Obligations (PKPU) and bankruptcy processes. Our team specializes in handling debt restructuring and bankruptcy cases, providing strategic advice to achieve optimal outcomes for our clients.", image: "/Assets/Service Icon/debt-restructuring-and-bankcruptcy.png" },
    { id: 4, title: "Dispute Resolution", description:"We deliver effective legal solutions through negotiation, mediation, or arbitration. Our dispute resolution team is experienced in handling various types of disputes, including commercial, loan, and property disputes. We focus on resolving disputes quickly and efficiently to minimize the negative impact on our clients.", image: "/Assets/Service Icon/dispute-resoltion.png" },
    { id: 5, title: "Employment Law", description:"We resolve labor disputes at bipartite, tripartite, and Industrial Relations Court levels. We provide legal opinions on termination processes and draft employment agreements. Our team assists clients in managing employee relations, ensuring compliance with labor laws, and reducing potential legal risks.", image: "/Assets/Service Icon/employment-law.png" },
    { id: 6, title: "Fraud Investigation", description:"We conduct fraud investigations within companies and provide advice on necessary legal actions. Our team excels in identifying and investigating fraud cases, offering legal solutions to protect our clients' interests and recover losses.", image: "/Assets/Service Icon/fraud-detection.png" },
    { id: 7, title: "Government Policy", description:"We assist in conducting feasibility studies and drafting regulations for public policies, including transportation and energy infrastructure. Our team collaborates with governments and related institutions to develop effective and sustainable policies while ensuring regulatory compliance.", image: "/Assets/Service Icon/government-policy.png" },
    { id: 8, title: "Energy & Natural Resources", description:"We provide legal services for projects in the energy, mining, coal, oil, and gas sectors. Our team is experienced in managing various legal aspects related to these projects, including licensing, contracts, and environmental regulation compliance.", image: "/Assets/Service Icon/energy-and-natural-resources.png" },
    { id: 9, title: "Transportation & Logistics", description:"We offer advice on regulations and policies in the transportation and logistics sectors. Our team helps clients manage legal risks related to transportation and logistics operations while ensuring compliance with applicable regulations.", image: "/Assets/Service Icon/transportation-and-logistic.png" },
    { id: 10, title: "Data Protection", description:"We provide guidance on compliance with data protection regulations, including data privacy policies, cybersecurity measures, and GDPR implementation. Our team assists clients in securely managing personal data and meeting legal requirements.", image: "/Assets/Service Icon/data-protection.png" },
    { id: 11, title: "ESG (Environmental, Social, and Governance)", description:"Our team specializes in ensuring compliance with environmental regulations, including carbon trading. We help clients ensure their business practices are environmentally friendly, contribute positively to society, and adhere to transparent and ethical governance.", image: "/Assets/Service Icon/esg.png" },
    { id: 12, title: "Intellectual Property Rights", description:"We address various aspects of intellectual property rights, including copyright, patents, and trademarks. Our team assists clients in protecting and managing their intellectual property assets, as well as handling disputes that may arise related to intellectual property rights.", image: "/Assets/Service Icon/intellectual-property-rights.png" },
    { id: 13, title: "Islamic and Sharia Law", description:"We offer legal services related to inheritance law, Islamic banking, and other aspects of Islamic law. Our team is skilled in addressing various legal matters concerning Sharia principles and providing solutions tailored to clients' needs.", image: "/Assets/Service Icon/islamic-and-sharia-law.png" },
    { id: 14, title: "Family Law", description:"We handle various family law matters, including divorce, child custody, division of marital property, and inheritance. Our team provides sensitive and effective legal advice and representation to help clients resolve their family issues in the best way possible.", image: "/Assets/Service Icon/family-law.png" },
];


const Service = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
  
    const visibleServices = showAll ? services : services.slice(0, 8);
  
    return (
        <section id="services" className="relative py-16">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C264B] to-[#F3EDE1]"></div>
            {/* Overlay Background */}
            <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/Assets/Background/Services Background.jpg')" }}
            ></div>
    
            {/* Content Wrapper */}
            <div className="relative max-w-6xl mx-auto px-4 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        
                {/* Grid Cards with Smooth Animation */}
                <div className="grid grid-cols-4 gap-4">
                    <AnimatePresence>
                    {visibleServices.map((service) => (
                        <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-lg overflow-hidden flex flex-col h-full cursor-pointer"
                        onClick={() => setSelectedService(service)}
                        >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-20 h-20 mx-auto mt-4 object-contain"
                        />
                        <div className="p-4 text-center text-black flex-grow">
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                        </div>
                        <div className="bg-[#D1A43F] h-[5px] w-full mt-auto"></div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
    
                {/* Button See More / Show Less */}
                <div className="text-center mt-8">
                    <motion.button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-[#D1A43F] text-white px-6 py-2 font-bold transition hover:opacity-80"
                    whileTap={{ scale: 0.95 }}
                    >
                    {showAll ? "Show Less" : "See More"}
                    </motion.button>
                </div>
            </div>
    
            {/* Popup */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 text-center shadow-xl max-w-md"
                    >
                        <h3 className="text-2xl font-bold text-black mb-4">
                        {selectedService.title}
                        </h3>
                        <p className="text-gray-700">{selectedService.description}</p>
                        <motion.button
                        onClick={() => setSelectedService(null)}
                        className="mt-4 bg-[#D1A43F] text-white px-4 py-2 font-bold transition hover:opacity-80"
                        whileTap={{ scale: 0.95 }}
                        >
                        Close
                        </motion.button>
                    </motion.div>
                    </motion.div>
                )}  
            </AnimatePresence>
        </section>
    );
};
  
export default Service;