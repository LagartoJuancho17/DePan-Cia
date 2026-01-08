
import React, { useEffect, useRef } from 'react';
import { NEWS_ITEMS } from '../constants';

interface Props {
  onBack: () => void;
}

const News: React.FC<Props> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-32" ref={containerRef}>
      <section className="pt-24 md:pt-40 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="reveal">
            <button 
              onClick={onBack}
              className="text-[#D12626] text-[10px] font-black uppercase tracking-[0.3em] mb-4 hover:opacity-50 transition-opacity flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Volver
            </button>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
              Novedades<br/><span className="text-[#D12626] italic">&</span> Diario
            </h1>
            <p className="text-sm opacity-40 font-bold uppercase tracking-widest max-w-md">
              Explora las últimas historias de nuestro horno, eventos comunitarios y lanzamientos de temporada.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 border-t border-black/5 pt-12">
          {NEWS_ITEMS.map((item, idx) => (
            <div key={item.id} className="reveal flex flex-col md:flex-row gap-12 group items-center py-12 border-b border-black/[0.03]">
              <div className="w-full md:w-1/2 aspect-video md:aspect-[16/9] rounded-[2.5rem] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#D12626] text-white px-4 py-1.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                    {item.date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight group-hover:text-[#D12626] transition-colors">
                  {item.title}
                </h2>
                <p className="text-lg text-black/60 font-medium leading-relaxed max-w-xl">
                  {item.description}
                </p>
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#D12626] hover:border-[#D12626] transition-all">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#2a2a2a] rounded-[3rem] p-12 md:p-24 text-center text-[#fcfaf7] reveal">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
            Únete a nuestro<br/>Círculo de Harina
          </h2>
          <p className="text-lg opacity-60 mb-12 max-w-xl mx-auto font-medium">
            Recibe en tu correo las novedades más importantes, recetas exclusivas y acceso prioritario a nuestros talleres.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="bg-white/10 border border-white/20 px-8 py-5 rounded-full text-sm focus:outline-none focus:bg-white/20 transition-all flex-grow"
            />
            <button className="bg-[#D12626] text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
