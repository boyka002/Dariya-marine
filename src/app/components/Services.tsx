'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExploreButton } from '@/components/ui/explore-button'
import { ServiceDetailsDialog } from '@/components/service-details-dialog'

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

const launchingServices = [
    'auling up and launching of Vessel of size 55-meter x 10 meter – Tonnage – 500 Tons'
  ]

const repair2Sercvices = [
    'Extrusions and hot air hand welders using sheets from 4mm to 50mm',
    'Custom made Plastic Tanks-Tanks made from thermoplastics such as HDPE, PP'
]

const buildingDetails = [
    'Custom design and engineering services for marine vessels',
    'State-of-the-art facilities for large-scale boat construction',
    'Expertise in working with various materials including steel, aluminum, and composites',
    'Integration of advanced marine technologies and systems',
    'Strict quality control and adherence to international maritime standards'
  ]
  
  const repairDetails = [
    'Emergency repair services available 24/7',
    'Comprehensive hull inspection and maintenance',
    'Advanced diagnostic tools for engine and electrical system repairs',
    'Expertise in handling both traditional and modern vessel designs',
    'Dry docking facilities for extensive repair and refurbishment projects'
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
          {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
           <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h3 className="text-2xl font-semibold text-[#0A0A3F] border-l-4 border-blue-600 pl-4">
                Building
              </h3>
              <ul className="space-y-4 pl-6">
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
                <ServiceDetailsDialog
                  title="Building Services"
                  description="We specialize in constructing high-quality marine vessels tailored to your specific needs."
                  details={buildingDetails}
                />
                {/* <ExploreButton>Read More</ExploreButton> */}
                {/* <ChevronRight className="w-5 h-5" /> */}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden  order-1 md:order-2"
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
          {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
          <div className="grid md:grid-cols-2 gap-8 items-center flex flex-col-reverse md:flex-row">

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
              <ul className="space-y-4 pl-6">
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
                {/* <ExploreButton>Read More</ExploreButton> */}
                <ServiceDetailsDialog
                  title="Repair Services"
                  description="Our expert team provides comprehensive repair and maintenance services for all types of marine vessels."
                  details={repairDetails}
                />
                {/* <ChevronRight className="w-5 h-5" /> */}
              </motion.div>
            </motion.div>
          </div>
          {/* Launching air bags */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h3 className="text-2xl font-semibold text-[#0A0A3F] border-l-4 border-blue-600 pl-4">
                Launching Air Bags
              </h3>
              <ul className="space-y-4 pl-6">
                {launchingServices.map((service, index) => (
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden  order-1 md:order-2"
            >
              <Image
                src="/ServiceBuilding.png"
                alt="Marine vessel building services"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
                    {/* Repair Services 2 */}
          {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/ServiceRepair-2.png"
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
              <ul className="space-y-4 pl-6">
                {repair2Sercvices.map((service, index) => (
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

