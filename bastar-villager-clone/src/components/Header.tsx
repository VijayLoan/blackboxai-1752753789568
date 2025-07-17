'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              Bastar Villager
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
                About Me
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="/blogs" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
                Blogs
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-700 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-black hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-gray-700 block px-3 py-2 text-base font-medium">
                About Me
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Contact Us
              </Link>
              <Link href="/blogs" className="text-black hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Blogs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
