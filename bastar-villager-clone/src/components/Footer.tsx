export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-aladin">
            Bastar Villager
          </h3>
          
          <p className="text-gray-300 mb-6">
            Follow Me On Instagram
          </p>
          
          <a
            href="https://www.instagram.com/bastarvillager/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            @bastarvillager
          </a>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Bastar Villager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
