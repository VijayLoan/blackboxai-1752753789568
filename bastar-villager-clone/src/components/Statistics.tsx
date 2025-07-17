'use client'

import { statistics } from '@/lib/data'

export default function Statistics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-poppins">
            Follow My Journey
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-damion">
              {statistics.visitors.toLocaleString()}
            </div>
            <div className="text-gray-600 text-lg">Visitor's</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-damion">
              {statistics.videos}
            </div>
            <div className="text-gray-600 text-lg">Videos</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-damion">
              {statistics.engagement}%
            </div>
            <div className="text-gray-600 text-lg">Engagement Rate</div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="https://www.youtube.com/channel/UCR0O3e78_BWFTZMWEaN76Xg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 text-lg font-medium transition-colors"
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com/bastarvillager/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 text-lg font-medium transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
