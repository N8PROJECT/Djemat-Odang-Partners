import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const clients = [
    "/Assets/Clients/kia.png",
    "/Assets/Clients/kemenko-ekon-ri.png",
    "/Assets/Clients/indosurya-removebg-preview.png",
    "/Assets/Clients/PLN-removebg-preview.png",
    "/Assets/Clients/jasamarga.png",
    "/Assets/Clients/SIG-removebg-preview.png",
    "/Assets/Clients/worldbank.png",
    "/Assets/Clients/ADB-removebg-preview.png",
    "/Assets/Clients/job-pertamina-medco-removebg-preview.png",
];

function Clients() {
    return (
        <section className="py-16 text-center overflow-x-hidden">
            {/* Title */}
            <h2 className="text-xl font-bold text-black tracking-wide">OUR CLIENTS</h2>
            <div className="w-16 h-[3px] bg-[#D1A43F] mx-auto mt-1 mb-8"></div>

            {/* Clients Carousel */}
            <div className="max-w-5xl mx-auto overflow-x-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    freeMode={true}
                    allowTouchMove={true}
                    centeredSlides={false}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 }
                    }}
                >
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center p-4 h-[150px]">
                                <img src={client} alt={`Client ${index % clients.length + 1}`} className="max-w-[80px] sm:max-w-[100px] md:max-w-[130px] h-auto" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;
