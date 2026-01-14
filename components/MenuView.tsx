
import React, { useEffect, useRef } from 'react';
import { COLLECTIONS } from '../constants';
import { Product } from '../types';

interface Props {
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const MenuView: React.FC<Props> = ({ onBack, onAddToCart, onViewDetails }) => {
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
    <div className="bg-white min-h-screen pb-32 animate-fade-in" ref={containerRef}>
      {/* Header Estilo Editorial */}
      <section className="pt-24 md:pt-40 px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="reveal">
          <button 
            onClick={onBack}
            className="text-[#D12626] text-[10px] font-black uppercase tracking-[0.3em] mb-4 hover:opacity-50 transition-opacity flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Volver
          </button>
          <p className="text-[#D12626] text-xs font-bold uppercase tracking-[0.3em] mb-4">La Carta Completa</p>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
            The<br/><span className="text-[#D12626] italic">Menu</span>
          </h1>
          <div className="w-full h-[1px] bg-black/5 mt-12"></div>
        </div>
      </section>

      {/* Listado estilo "From the Bench" con Imágenes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {COLLECTIONS.map((collection, cIdx) => (
            <div key={collection.id} className="reveal space-y-12" style={{ transitionDelay: `${cIdx * 100}ms` }}>
              <div className="inline-block border-b-2 border-[#D12626] pb-1">
                <h2 className="text-2xl font-black uppercase tracking-tighter">
                  {collection.title}
                </h2>
              </div>

              <div className="space-y-10">
                {collection.products.filter(p => !p.hidden).map((product, pIdx) => (
                  <div 
                    key={product.id} 
                    onClick={() => onViewDetails(product)}
                    className="group cursor-pointer flex gap-6 items-start reveal"
                    style={{ transitionDelay: `${(cIdx * 100) + (pIdx * 50)}ms` }}
                  >
                    {/* Thumbnail Visual */}
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-[#EFECE7] border border-black/5 transition-transform duration-500 group-hover:scale-110 relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className={`w-full h-full object-cover transition-all duration-700 ${product.hoverImage ? 'absolute inset-0 group-hover:opacity-0' : 'grayscale-[0.5] group-hover:grayscale-0'}`} 
                      />
                      {product.hoverImage && (
                        <img 
                          src={product.hoverImage} 
                          alt={product.name} 
                          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700" 
                        />
                      )}
                    </div>

                    <div className="flex-grow pt-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-base md:text-lg font-bold uppercase tracking-tight group-hover:text-[#D12626] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <div className="flex-grow mx-4 border-b border-black/5 border-dashed"></div>
                        <span className="text-sm font-black opacity-40 group-hover:opacity-100 group-hover:text-[#D12626] transition-all duration-300">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm opacity-50 font-medium leading-relaxed italic line-clamp-2 md:line-clamp-none pr-12">
                        {product.description || "Elaborado con masa madre de 48h y harinas orgánicas seleccionadas."}
                      </p>
                      
                      {/* Tags sutiles */}
                      <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                         {product.tags.slice(0, 2).map(tag => (
                           <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-[#D12626] border border-[#D12626]/20 px-2 py-0.5 rounded-full">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Estético */}
      <section className="mt-48 px-6 text-center reveal">
        <div className="max-w-xl mx-auto border-t border-black/5 pt-16">
          <p className="text-sm opacity-40 italic leading-relaxed font-medium">
            "El pan es el alma de la mesa. En Pan&Cia, respetamos los tiempos del trigo para que cada bocado cuente una historia de paciencia y honestidad."
          </p>
          <div className="mt-12 flex justify-center gap-8">
             <div className="w-12 h-[1px] bg-[#D12626]/30 self-center"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D12626]">Bakery & Co.</span>
             <div className="w-12 h-[1px] bg-[#D12626]/30 self-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuView;
