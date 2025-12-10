export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-wisecura-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold font-display mb-6 text-wisecura-text">
              Wise Cura
            </h2>
            <p className="text-wisecura-textLight max-w-md mb-8">
              Immersive AR/VR Training for Australia’s Aged-Care Workforce. <br />
              Clinical precision meets futuristic training.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-wisecura-background border border-wisecura-border hover:bg-wisecura-primary hover:text-white transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-wisecura-text">Platform</h4>
            <ul className="space-y-4 text-wisecura-textLight">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Clinical Skills</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Practice Skills</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">For Providers</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Enterprise</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-wisecura-text">Company</h4>
            <ul className="space-y-4 text-wisecura-textLight">
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Team</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-wisecura-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-wisecura-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-wisecura-textLight">
          <p>© 2025 Wise Cura. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-wisecura-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-wisecura-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
