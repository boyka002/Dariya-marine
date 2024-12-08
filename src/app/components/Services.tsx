'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExploreButton } from '@/components/ui/explore-button'

const buildingServices = [
  'Barge and Boat Building works in steel, Marine grade aluminum and in GRP',
  'Grit Blasting and painting works',
  'Installation of Marine engines, electric motors, batteries and OBM',
  'Installation of pumps, motors, windlass, cranes, bow thrusters etc',
  'Installation of Propeller, shaft, rudder, steering works'
]

const repairServices = [
  'IRS, KIV annual survey, shaft survey, drydock survey works',
  'Docking and undocking of vessels',
  'Rebuilding and restoration of crafts',
  'Grit Blasting and painting works',
  'Steel, Aluminum repair works',
  'Wood, Fiberglass vessel repair'
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-gray-500"
          >
            Our
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-[#0A0A3F] mt-1"
          >
            Services
          </motion.h2>
        </div>

        <div className="space-y-20">
          {/* Building Services */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#0A0A3F] border-l-4 border-blue-600 pl-4">
                Building
              </h3>
              <ul className="space-y-4">
                {buildingServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-[#0A0A3F] font-semibold hover:text-blue-600 transition-colors"
              >
                <ExploreButton>Read More</ExploreButton>
                {/* <ChevronRight className="w-5 h-5" /> */}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/ServiceBuilding.png"
                alt="Marine vessel building services"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Repair Services */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/ServiceRepair.png"
                alt="Marine vessel repair services"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#0A0A3F] border-l-4 border-blue-600 pl-4">
                Repair
              </h3>
              <ul className="space-y-4">
                {repairServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-[#0A0A3F] font-semibold hover:text-blue-600 transition-colors"
              >
                {/* <span>Read More</span> */}
                <ExploreButton>Read More</ExploreButton>
                {/* <ChevronRight className="w-5 h-5" /> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

