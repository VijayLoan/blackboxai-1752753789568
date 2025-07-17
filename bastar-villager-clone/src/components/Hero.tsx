'use client'

export default function Hero() {
  const handlePlayVideo = () => {
    window.open('https://www.youtube.com/channel/UCR0O3e78_BWFTZMWEaN76Xg', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <button
              onClick={handlePlayVideo}
              className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-12 h-12 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <div className="absolute inset-0 rounded-full border-2 border-black/20 group-hover:border-black/40 transition-all duration-300 animate-pulse"></div>
            </button>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 font-aladin">
            Bastar Villager
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-poppins">
            Professional Video Blogger
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bastar's culture is famous because of its style, if you want to be familiar with Bastar, then join me.
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
            बस्तर की संस्कृति अपनी शैली के कारण प्रसिद्ध है, यदि आप बस्तर से परिचित होना चाहते हैं, तो मेरे साथ जुड़ें।
          </p>
        </div>
      </div>
    </section>
  )
}
