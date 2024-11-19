'use client'

import { Star } from 'lucide-react'
import { FaYelp, FaFacebook, FaGoogle } from 'react-icons/fa'

export default function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <p className="max-w-2xl text-lg font-medium text-center lg:text-left lg:text-2xl">
            Trust the experts at FlowMasters Plumbing for all your residential and commercial plumbing needs.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { rating: 4.8, icon: FaYelp, name: 'Yelp' },
              { rating: 4.9, icon: FaFacebook, name: 'Facebook' },
              { rating: 4.7, icon: FaGoogle, name: 'Google' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1 p-4 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center gap-2 text-2xl font-medium text-red-600">
                  <span>{item.rating}</span>
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}