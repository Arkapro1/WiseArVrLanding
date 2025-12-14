export default function Footer() {
  return (
    <footer className="relative pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Section with Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 relative z-10">
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-bold mb-4 sm:mb-6 text-gray-900 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Website Design</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Mobile App Design</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">SaaS/Dashboard</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Consultant</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-bold mb-4 sm:mb-6 text-gray-900 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">All Projects</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Newsletter</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-bold mb-4 sm:mb-6 text-gray-900 uppercase tracking-wider">Say hello!</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-1 sm:gap-2">
                <span>📧</span> <span className="truncate">info@wisecura.com.au</span>
              </li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-1 sm:gap-2">
                <span>📱</span> @wisecura
              </li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-1 sm:gap-2">
                <span>🌐</span> LinkedIn
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-bold mb-4 sm:mb-6 text-gray-900 uppercase tracking-wider">Creative tools</h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Immersive AR/VR Training for Australia's Aged-Care Workforce
            </p>
          </div>
        </div>
        
        {/* Large Brand Name */}
        <div className="relative mb-8 sm:mb-12 overflow-hidden">
          <h2 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black text-gray-900 leading-none tracking-tighter lowercase select-none" style={{ fontFamily: "'Sekuya', system-ui" }}>
            wisecura
          </h2>
        </div>
        
        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 relative z-10">
          <p className="text-center sm:text-left">© 2025 Wise Cura. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-8">
            <span className="hover:text-wisecura-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-wisecura-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
