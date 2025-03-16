import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import image1 from "../assets/testCarousell/image1.jpg";
import image2 from "../assets/testCarousell/image2.jpg";
import image3 from "../assets/testCarousell/image3.jpg";

const images = [image1, image2, image3];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="coverflow"
        centeredSlides={true} // Ensures the middle slide is in focus
        slidesPerView={3} // Displays 3 images at a time
        initialSlide={1} // Ensures the middle image starts as the highlight
        coverflowEffect={{
          rotate: 0,
          stretch: 50, // Adjusts spacing between images
          depth: 300, // Adjusts perspective depth
          modifier: 1, // Controls scaling effect
          scale: 1, // Ensures center slide is biggest
          slideShadows: false,
        }}
        className="w-full h-[350px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
