import React from 'react'
import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
    images: string[];
    scrollYProgress: MotionValue<number>;
  }

  
const ImageSlider = ({ images, scrollYProgress }: ImageSliderProps) => {
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(images.length - 1) * 100}%`]
      );
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full"
      >
        {images.map((src, index) => (
          <div 
            key={src} 
            className="absolute w-full h-screen"
            style={{ top: `${index * 100}%` }}
          >
            <Image
              src={src}
              alt={`Slide image ${index + 1}` || "Image"}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ImageSlider
