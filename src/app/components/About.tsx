'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute w-full h-[122%] left-0 -top-20 right-0 bottom-0">
            <Image
                src="/AboutBG.png"
                alt="Background pattern"
                fill
                className="text-transparent"
                priority
            />
            </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mt-16 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // className="text-sm uppercase tracking-wider text-gray-300"
            style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgb(209, 213, 219)' }}
          >
            Know More
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mt-1"
          >
            About Us
          </motion.h2>
        </div>

        {/* Images Section */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Small Images - Hidden on Mobile */}
          <div className="hidden md:block">
            {/* Top Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[15rem] -left-[10rem] z-20 w-[263px] h-[263px]"
            //   style={{ border: '12px solid #0A014C' }}
            >
              <Image
                src="/about-image-2.png"
                alt="Technical drawing"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-[8rem] -right-[8rem] z-20 w-[378px] h-[378px]"
            //   style={{ border: '12px solid #0A014C' }}
            >
              <Image
                src="/about-image-3.png"
                alt="Marine vessels"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Large Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative mt-[160px] md:mt-[120px] w-full h-[411px] rounded-[40px] overflow-hidden"
            // style={{ border: '12px solid #0A014C' }}
          >
            <Image
              src="/about-image-1.jpg"
              alt="PB-2 vessel"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-lg leading-relaxed text-white">
            We are pleased to introduce ourselves: Dhariya Marine Engineering Services to your organization as 
            providers of Marine engineering services. DMES was established in 2016 in Kochi as a small marine 
            workshop.
          </p>
          <p className="text-lg leading-relaxed text-white">
            Our boat yard is situated in Edakochi, Kochi has a facility for boat, barge building and repair. 
            This facility having work approvals from Kerala Maritime Board, Govt of Kerala is capable of 
            undertaking construction and repair of various types of vessels up to 55 Meter x 10 meters in size 
            at present and are in the process of expanding the capacities further.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

