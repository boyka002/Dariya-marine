import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  quickLinks: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Term Of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Credits', href: '/credits' },
    { name: 'FAQs', href: '/faqs' },
  ],
  services: [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A3F]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description Section */}
          {/* <div className="col-span-1 lg:col-span-1"> */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center text-center">
          <div className="mb-1">
            <Image
                src="/logo-2.svg"
                alt="Dhariya Marine Engineering Services"
                width={362}
                height={157}
                className="w-[362px] h-[157px] brightness-0 invert"
            />
            </div>

            <p className="text-sm leading-6 text-gray-300 ml-8 mb-8">
              Dhariya Marine Engineering Services. to your Organization as providers of Marine engineering services.
            </p>
            <div className="flex space-x-12">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          {/* <div className="col-span-1 "> */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold leading-6 text-white mb-6">Navigation</h3>
            <ul role="list" className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          {/* <div className="col-span-1"> */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold leading-6 text-white mb-6">Quick Link</h3>
            <ul role="list" className="space-y-4">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          {/* <div className="col-span-1"> */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold leading-6 text-white mb-6">Services</h3>
            <ul role="list" className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-2 border-t border-white/10">
          <p className="text-center text-xs leading-5 text-gray-300">
            &copy; Copyright 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

