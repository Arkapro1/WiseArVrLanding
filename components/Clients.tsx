export default function Clients() {
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold tracking-widest text-white/30 uppercase mb-12">Trusted by Industry Leaders</p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {["MaisonRose", "HealthTech", "MediCorp", "FutureCare", "GlobalMed"].map((client, i) => (
            <div key={i} className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
