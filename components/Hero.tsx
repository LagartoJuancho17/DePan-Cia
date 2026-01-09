
import React from 'react';

interface Props {
  onShopClick?: () => void;
}

const Hero: React.FC<Props> = ({ onShopClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://static.independent.co.uk/2025/05/09/15/22/iStock-1404156627.jpg" 
          alt="Bakery background" 
          className="w-full h-full object-cover scale-110 animate-[zoom-out_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Buenos Aires • Desde 2022
        </p>
        <h1 className="text-white text-7xl md:text-[14rem] font-black tracking-tighter uppercase leading-[0.8] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Pan<br/><span className="text-[#D12626]">& Cia</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a 
            href="#menu" 
            className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#D12626] hover:text-white transition-all shadow-2xl"
          >
            Explora el Menu
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <button 
            onClick={onShopClick}
            className="group inline-flex items-center gap-4 bg-[#D12626] text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#D12626] transition-all shadow-2xl"
          >
            Compra Ahora
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
        <span className="text-[9px] uppercase tracking-[0.3em] font-black">Scrollar para abajo</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <style>{`
        @keyframes zoom-out {
          0% { transform: scale(1.1); }
          50% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
