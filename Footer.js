// components/Footer.js
'use client';
export default function Footer() {
  return (
    <footer className="bg-raga-dark-900 text-raga-dark-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">The Music Diary</h3>
          <p>Your complete online companion for Hindustani Classical Music</p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/raags" className="hover:text-raga-gold-400 transition-colors">Ragas</a></li>
            <li><a href="/learn" className="hover:text-raga-gold-400 transition-colors">Courses</a></li>
            <li><a href="/tools" className="hover:text-raga-gold-400 transition-colors">Tools</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-raga-gold-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-raga-gold-400 transition-colors">Contact</a></li>
            <li><a href="/privacy" className="hover:text-raga-gold-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-raga-dark-700 flex items-center justify-center hover:bg-raga-gold-500 hover:text-raga-dark-900 transition-colors">
              <span className="sr-only">Facebook</span>f
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-raga-dark-700 flex items-center justify-center hover:bg-raga-gold-500 hover:text-raga-dark-900 transition-colors">
              <span className="sr-only">Twitter</span>t
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-raga-dark-700 flex items-center justify-center hover:bg-raga-gold-500 hover:text-raga-dark-900 transition-colors">
              <span className="sr-only">Instagram</span>ig
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-raga-dark-700 text-sm text-center">
        © {new Date().getFullYear()} The Music Diary. All rights reserved.
      </div>
    </footer>
  )
}