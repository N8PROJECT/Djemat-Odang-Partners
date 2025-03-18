import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/testCarousell/image1.jpg",
  "/assets/testCarousell/image2.jpg",
  "/assets/testCarousell/image3.jpg",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Image Container */}
      <div className="relative flex justify-center items-center h-[350px] w-[800px]">
        {images.map((src, i) => {
          const position = (i - index + images.length) % images.length;

          const variants = {
            center: { scale: 1, x: 0, zIndex: 10, opacity: 1 },
            left: { scale: 0.8, x: -400, zIndex: 5, opacity: 0.6 },
            right: { scale: 0.8, x: 400, zIndex: 5, opacity: 0.6 },
          };

          const animate =
            position === 0 ? "center" : position === 1 ? "right" : "left";

          return (
            <motion.img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute rounded-lg object-cover shadow-lg w-[350px] h-[200px]"
              initial="center"
              animate={animate}
              variants={variants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-4 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
