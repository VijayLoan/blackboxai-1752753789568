'use client'

import { blogPosts } from '@/lib/data'
import BlogCard from './BlogCard'

export default function BlogGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-poppins">
            Guest Post
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-4 py-2 bg-black text-white rounded-md">All</button>
            <button className="px-4 py-2 text-black hover:bg-gray-100 rounded-md transition-colors">
              Guest Post
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
