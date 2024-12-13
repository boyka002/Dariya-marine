'use client'

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { ExploreButton } from '@/components/ui/explore-button'
import Link from "next/link";

export default function Hero() {
  
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Only execute on the client side
    const handleResize = () => setWindowWidth(window.innerWidth);

    setWindowWidth(window.innerWidth); // Set initial width
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth !== null && windowWidth < 640;

  const navLinks = { href: '#services', label: 'Services' }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-[120%]"
        style={{ backgroundImage: "url('/HeroBanner.png')" }}
      />
        {/* Semi-transparent Blur PNG behind the text */}
          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundImage: "url('/TextBlurBG.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)', // Adjust the amount of blur you need
              opacity: 0.7, // Optional to make it semi-transparent
            }}
          />

      {/* Content */}
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex flex-col items-center  "
      style={{
        // textAlign: isMobile ? 'center' : 'left',
      }}> */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12"
            style={{
              textAlign: isMobile ? 'center' : 'left',
            }}>
        <div className="max-w-2xl relative top-[3rem]">
          {/* Semi-transparent background */}
          {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-[40px] transform -skew-x-6" /> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Welcome to Dhariya Marine Engineering Services
            </h1>
            <p className="text-lg text-black-500 mb-8 leading-relaxed">
              Providers of Marine engineering services. We are into building,
              repair and maintenance of steel, aluminium and FRP boats,
              construction and repair of various types of vessels up to 55
              Meters x 10 meters.
            </p>
            <Link
                    key={navLinks.label}
                    href={navLinks.href}
                    className="relative group z-10"
                  >

            <ExploreButton>Explore</ExploreButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

