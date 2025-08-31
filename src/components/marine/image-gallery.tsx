"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type GalleryImage = { src: string; alt: string }
export type ImageGalleryProps = {
  images?: GalleryImage[]
  autoSlideInterval?: number // in ms
}

const defaultImages = Array.from({ length: 10 }).map((_, i) => ({
  src: `/gallery/img-${i + 1}.png`,
  alt: `Marine gallery image ${i + 1}`,
}))

function ImageGallery({ images, autoSlideInterval = 2500 }: ImageGalleryProps) {
  const galleryImages = images && images.length > 0 ? images : defaultImages
  const [index, setIndex] = useState(0)

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % galleryImages.length), autoSlideInterval)
    return () => clearInterval(interval)
  }, [galleryImages.length, autoSlideInterval])

  const go = (dir: number) => {
    setIndex((prev) => {
      let next = prev + dir
      if (next < 0) next = galleryImages.length - 1
      if (next >= galleryImages.length) next = 0
      return next
    })
  }

  const prevIndex = (index - 1 + galleryImages.length) % galleryImages.length
  const nextIndex = (index + 1) % galleryImages.length

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-8">
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <div className="flex items-center justify-center gap-4 px-2 sm:px-0">
            {/* Prev image */}
            <motion.div
              key={prevIndex}
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              transition={{ duration: 0.25, ease: "easeInOut" }} // faster
              className="relative h-[150px] w-[120px] sm:h-[250px] sm:w-[180px] rounded-xl overflow-hidden shadow-md"
            >
              <Image src={galleryImages[prevIndex].src} alt={galleryImages[prevIndex].alt} fill className="object-cover" />
            </motion.div>

            {/* Current image */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // faster
              className="relative h-[200px] w-[250px] sm:h-[350px] sm:w-[500px] rounded-2xl overflow-hidden shadow-xl z-10"
            >
              <Image src={galleryImages[index].src} alt={galleryImages[index].alt} fill className="object-cover" priority />
            </motion.div>

            {/* Next image */}
            <motion.div
              key={nextIndex}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 50 }}
              transition={{ duration: 0.25, ease: "easeInOut" }} // faster
              className="relative h-[150px] w-[120px] sm:h-[250px] sm:w-[180px] rounded-xl overflow-hidden shadow-md"
            >
              <Image src={galleryImages[nextIndex].src} alt={galleryImages[nextIndex].alt} fill className="object-cover" />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Prev Button */}
      <button
        onClick={() => go(-1)}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => go(1)}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-[#0A0A3F]" : "bg-slate-300 hover:bg-slate-400"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
export { ImageGallery }
