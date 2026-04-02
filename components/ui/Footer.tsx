export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white border-t border-teal-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-bold text-teal-300 mb-3 text-lg drop-shadow-lg">SDG Dashboard EA</h3>
            <p className="text-sm text-gray-200">
              Tracking the Progress of the Sustainable Development Goals            </p>
          </div>

          <div>
            <h3 className="font-bold text-teal-300 mb-3 text-lg drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/overview" className="hover:text-teal-400 transition-colors duration-300">
                  Overview
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-teal-400 transition-colors duration-300">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-teal-300 mb-3 text-lg drop-shadow-lg">Sources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://sdgs.un.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  VN SDG&apos;s
                </a>
              </li>
              <li>
                <a
                  href="https://unstats.un.org/sdgs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  SDG Indicatoren
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-10 border-t border-teal-700 text-center text-sm text-gray-200">
          © {new Date().getFullYear()}SDG Dashboard – Explore and Understand the Global Goals.
        </div>
      </div>
    </footer>
  )
}
