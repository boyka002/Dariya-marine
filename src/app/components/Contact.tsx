'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import Map from '@/components/map'

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.fullName,
          from_email: data.email,
          contact_number: data.contactNumber,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      setSubmitStatus('success')
      reset()
    } catch (error) {
        console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-[#0A0A3F] mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            // className="md:col-span-7 bg-white/95 rounded-[30px] rounded-br-3xl shadow-lg p-8 md:pr-[40rem]"
            // style={{
            //   width: '1214px',
            //   height: '847px',
            //   top: '5946px',
            //   left: '77px',
            //   gap: '0px',
            //   zIndex: 1,
            //   opacity: 0,
            // }}
            className="md:col-span-7 bg-white/95 rounded-[30px] rounded-br-3xl shadow-lg p-8"
            style={{
              width: '100%', // Default width for mobile
              maxWidth: '100%', // Constrain it for smaller screens
              height: '100%', // Keep height consistent
              top: '5946px',
              left: '77px',
              gap: '0px',
              zIndex: 1, // Ensures proper stacking
              opacity: 0,
            }}
          >
            <h2 className="text-2xl font-semibold text-[#0A0A3F] mb-2">Send us a message</h2>
            <p className="text-gray-600 mb-6">
              Do you have a question? A complaint? Or need any help to choose the right service from Dhariya
              Feel free to contact us
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    +91
                  </span>
                  <input
                    {...register('contactNumber')}
                    type="tel"
                    className="block w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your Contact number"
                  />
                </div>
                {errors.contactNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.contactNumber.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A0A3F] text-white py-2 px-4 rounded-md hover:bg-[#0A0A3F]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5 bg-[#0A0A3F] text-white rounded-3xl shadow-lg p-8"
            style={{
                width: '100%',
                height: '100%',
                gap: '0px',
                opacity: 0,
                zIndex: 2,
            }}
          >
            <h2 className="text-2xl font-semibold mb-8">
              Hi! We are always here to help you.
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium mb-1">Call :</p>
                  <div className="space-y-1">
                    <p>+91 940 034 8299</p>
                    <p>+91 812 973 9897</p>
                    <p>+91 858 902 6004</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium mb-1">Email :</p>
                  <p>dhariyamarine@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium mb-1">Location :</p>
                  <p>15/1945</p>
                  <p>Near Aquinas College ,</p>
                  <p>Edakochi,Kerala - 682006</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Map 
            // address="15/1945 Near Aquinas College, Edakochi, Kerala - 682006, India" 
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

