'use client'

import { useRef } from 'react'
import { motion} from 'framer-motion'
import { ServiceDetailsDialog } from '@/components/service-details-dialog'
import { CarouselSlider } from '@/components/CarouselSlider'

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
  'Hauling up and launching of Vessel of size 55-meter x 10 meter – Tonnage – 500 Tons'
]

const repair2Services = [
  'Extrusions and hot air hand welders using sheets from 4mm to 50mm',
  'Custom made Plastic Tanks-Tanks made from thermoplastics such as HDPE, PP'
]

const buildingDetails = [
  'Barge and Boat Building works in steel, Marine grade aluminum and in GRP',
  'Grit Blasting and painting works',
  'Installation of Marine engines, electric motors, batteries and OBM',
  'Installation of pumps, motors, windlass, cranes, bow thrusters etc',
  'Installation of Propeller, shaft, rudder, steering works',
  'Installation of generators, batteries, solar, and BMS systems.',
  'Electrical cabling and termination work',
  'Bilge, fire, fuel, sewage, and ballast pipeline and valve works',
  'Vessel accommodation works, glazing works, etc.'

]

const repairDetails = [
  'IRS, KIV annual survey, shaft survey, drydock survey works',
  'Docking and undocking of vessels',
  'Rebuilding and restoration of crafts',
  'Grit Blasting and painting works',
  'Steel, Aluminum repair works',
  'Wood, Fiberglass vessel repair',
  'Interior woodwork',
  'Propeller, shaft, rudder, steering works',
  'Overhauling/servicing of marine engines, outboard motors, and gearboxes',
  'Overhauling of valves, pumps, motors, winches, and windlasses',
  'Hydraulic, bilge, ballast, cargo, fuel, and seawater freshwater pipeline renewal works',
  'Marine electrical cabling and termination work',
  'Machining jobs',
  'Underwater diving works—In-water survey',
  'Hydraulic works',
  'Spare supply',
  'Upholstery and boat cover works'
]

const buildingImages = [
  "/ServiceBuilding1.png",
  "/ServiceBuilding2.png",
  "/ServiceBuilding3.png",
]

const repairImages = [
  "/ServiceRepair1.jpg",
  "/ServiceRepair2.png",
  "/ServiceRepair3.png",
  "/ServiceRepair4.png",
]

const launchingImages = [
   "/ServiceLaunching1.png",
   "/ServiceLaunching2.jpg",
]

const plasticImages = [
  "/plastic1.png",
  "/plastic2.png",
  "/plastic3.png",
]


export default function Services() {
  const buildingSectionRef = useRef<HTMLDivElement>(null)
  const launchingSectionRef = useRef<HTMLDivElement>(null)

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
          <div ref={buildingSectionRef} className="space-y-6">
            <h3 className="text-4xl font-semibold text-[#0A0A3F] border-l-4 border-gray-600 pl-4">
              Building
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 self-start order-2 md:order-1"
              >
                <ul className="space-y-4 pl-6">
                  {buildingServices.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-2xl">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
                <CarouselSlider images={buildingImages} />
              </div>
            </div> 
            <div className='flex justify-center items-center'>
              <ServiceDetailsDialog
                title="Building Services"
                description="We specialize in constructing high-quality marine vessels tailored to your specific needs."
                details={buildingDetails}
              />
            </div>
          </div>

          {/* Repair Services */}
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-[#0A0A3F] border-l-4 border-gray-600 pl-4">
              Repair
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
                <CarouselSlider images={repairImages} />
              </div>
              {/* <motion.div
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
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 self-start"
              >
                <ul className="space-y-4 pl-6">
                  {repairServices.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-2xl">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className='flex justify-center items-center'>
              <ServiceDetailsDialog
                title="Repair Services"
                description="Our expert team provides comprehensive repair and maintenance services for all types of marine vessels."
                details={repairDetails}
              />
            </div>
          </div>

          {/* Launching air bags */}
          <div ref={launchingSectionRef} className="space-y-6">
            <h3 className="text-4xl font-semibold text-[#0A0A3F] border-l-4 border-gray-600 pl-4">
              Launching Air Bags
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 self-start order-2 md:order-1"
              >
                <ul className="space-y-4 self-start">
                  {launchingServices.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-2xl">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              {/* <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
                <ImageSlider images={launchingImages} scrollYProgress={launchingScrollProgress} />
              </div> */}
                          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
                <CarouselSlider images={launchingImages} />
              </div>
            </div>
          </div>

          {/* Repair Services 2 */}
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-[#0A0A3F] border-l-4 border-gray-600 pl-4">
              Repair
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
                <CarouselSlider images={plasticImages} />
              </div>
              {/* <motion.div
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
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 self-start"
              >
                <ul className="space-y-4 pl-6">
                  {repair2Services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-2xl">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

