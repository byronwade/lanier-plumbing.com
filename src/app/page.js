'use client'
import Link from 'next/link'

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Wrench, Award, Clock } from "lucide-react"

export default function VIPUnderConstruction() {
  return (
    <div className="min-h-screen p-4 text-white bg-gradient-to-br from-gray-900 to-gray-800 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <motion.h1 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lanier Plumbing
          </motion.h1>
          <motion.p 
            className="mt-2 text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Humble Plumber
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            className="col-span-1 p-8 bg-white md:col-span-2 lg:col-span-3 bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="flex items-center mb-4 text-3xl font-semibold">
              <Clock className="mr-3 text-yellow-400" />
              Coming Soon
            </h2>
            <p className="text-lg text-gray-300">
              <Link href="https://www.byronwade.com">Wade's Media</Link> is crafting a digital experience as refined as our plumbing services. Our new website will be unveiled shortly.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="flex items-center mb-4 text-2xl font-semibold">
              <Award className="mr-2 text-yellow-400" />
              VIP Service
            </h2>
            <p className="text-gray-300">
              Unparalleled expertise and white-glove service for discerning clients.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="flex items-center mb-4 text-2xl font-semibold">
              <Wrench className="mr-2 text-yellow-400" />
              Our Expertise
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>Tankless and Tanked Water Heaters</li>
              <li>High-End Kitchen Plumbing</li>
              <li>Custom Water Systems</li>
              <li>Drain Clearing</li>
            </ul>
          </motion.div>

          <motion.div 
            className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Phone className="mr-3 text-yellow-400" size={18} />
                (404) 988-3910
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-yellow-400" size={18} />
                byron@lanier-plumbing.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-3 text-yellow-400" size={18} />
                1100 McFarland 400 Dr. Alpharetta, GA. 30004
              </p>
            </div>
          </motion.div>
        </div>

        <footer className="mt-12 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lanier Plumbing. All rights reserved.</p>
          <p className="mt-2">Serving elite properties with distinction.</p>
        </footer>
      </div>
    </div>
  )
}