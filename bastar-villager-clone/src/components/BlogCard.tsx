import Link from 'next/link'
import { BlogPost } from '@/lib/data'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">{post.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
          {post.title}
        </h3>
        
        {post.titleHindi && (
          <h4 className="text-lg font-medium text-gray-800 mb-3">
            {post.titleHindi}
          </h4>
        )}
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {post.excerptHindi && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerptHindi}
          </p>
        )}
        
        <Link
          href={post.link}
          className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
        >
          Read More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
