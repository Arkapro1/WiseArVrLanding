export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Website Design</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Mobile App Design</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">SaaS/Dashboard</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Consultant</li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">All Projects</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Newsletter</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Say hello!</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-2">
                <span>📧</span> info@wisecura.com.au
              </li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-2">
                <span>📱</span> @wisecura
              </li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors flex items-center gap-2">
                <span>🌐</span> LinkedIn
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Creative tools</h4>
            <p className="text-gray-600 text-sm">
              Immersive AR/VR Training for Australia's Aged-Care Workforce
            </p>
          </div>
        </div>
        
        {/* Large Brand Name */}
        <div className="relative mb-12">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none tracking-tighter lowercase select-none">
            wisecura
          </h2>
        </div>
        
        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 relative z-10">
          <p>© 2025 Wise Cura. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-wisecura-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-wisecura-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
