'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { href: '#home', label: 'Home', active: true },
    { href: '#about-us', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-[522px] h-[219px] ">
            <Link href="/">
              <Image
                src="/dhariyaLogo.svg"
                alt="Dhariya Marine Engineering Services"
                fill
                className="object-contain -m-8 sm:m-0"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Nav Background */}
              {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[27px_27px_0px_27px]" /> */}
              
              {/* Nav Links */}
              <div className="relative flex space-x-14 px-8 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative group"
                  >
                    <span className="text-navy-900 text-lg font-medium">
                      {link.label}
                    </span>
                    <motion.div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 ${
                        link.active ? 'opacity-100' : 'opacity-0'
                      }`}
                      initial={false}
                      animate={link.active ? { width: '100%' } : { width: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden -mt-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#828282] bg-[#0A014C] rounded-[7px]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      link.active
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-navy-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

