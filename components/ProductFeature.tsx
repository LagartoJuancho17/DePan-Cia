
import React, { useEffect, useRef, useState } from 'react';
import { Collection, Product } from '../types';

interface Props {
  collections: Collection[];
  activeId: string;
  onSelect: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductFeature: React.FC<Props> = ({ collections, activeId, onSelect, onAddToCart, onViewDetails }) => {
  const activeCollection = collections.find(c => c.id === activeId) || collections[0];
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));

    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      handleScroll();
    }

    return () => observer.disconnect();
  }, [activeId]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.75;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 reveal">
          <div>
            <p className="text-[#D12626] text-xs font-bold uppercase tracking-[0.3em] mb-4">Categorías</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Selección<br/>Bakery</h2>
          </div>
          
          <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4">
            {collections.map(c => (
              <button key={c.id} onClick={() => onSelect(c.id)} className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] pb-3 transition-all relative whitespace-nowrap ${activeId === c.id ? 'text-[#D12626]' : 'opacity-30 hover:opacity-100 hover:text-[#D12626]'}`}>
                {c.title}
                {activeId === c.id && <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D12626] animate-in slide-in-from-left duration-300"></div>}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div ref={scrollRef} onScroll={handleScroll} className="flex gap-[2px] overflow-x-auto px-[1px] hide-scrollbar snap-x">
            {activeCollection.products.map((product, idx) => (
              <div 
                key={`${activeId}-${product.id}`} 
                onClick={() => onViewDetails(product)}
                className="min-w-[50vw] md:min-w-[24.9vw] snap-start reveal flex flex-col group/card cursor-pointer" 
                style={{ transitionDelay: `${(idx % 5) * 50}ms` }}
              >
                <div className="aspect-square bg-[#EFECE7] flex items-center justify-center overflow-hidden mb-4 md:mb-6 relative transition-colors duration-500 group-hover/card:bg-[#F3EFEA]">
                  <div className="w-full h-full overflow-hidden shadow-2xl transition-all duration-700 group-hover/card:scale-110 group-hover/card:shadow-[#D12626]/10 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`w-full h-full object-cover ${product.hoverImage ? 'transition-opacity duration-500 group-hover/card:opacity-0' : ''}`} 
                    />
                    {product.hoverImage && (
                      <img 
                        src={product.hoverImage} 
                        alt={`${product.name} hover`} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" 
                      />
                    )}
                  </div>
                  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 md:group-hover/card:opacity-100 transition-all translate-y-4 md:group-hover/card:translate-y-0 hidden md:block">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                      className="bg-[#D12626] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                      + Añadir
                    </button>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                    className="md:hidden absolute bottom-3 right-3 bg-[#D12626] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>
                
                <div className="px-4 md:px-6 space-y-1 md:space-y-2 mb-10 h-28 md:h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#D12626] text-[11px] md:text-base font-bold leading-tight uppercase tracking-tight line-clamp-2 md:line-clamp-none">
                      {product.name}
                    </h3>
                    <p className="text-[#D12626] text-[11px] md:text-sm font-black mt-1">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {product.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#D12626] border border-[#D12626]/30 px-2 py-1 md:px-3 md:py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-[35%] left-6 right-6 flex justify-between pointer-events-none hidden md:flex">
             <button onClick={() => scroll('left')} className={`w-14 h-14 pointer-events-auto flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} hover:bg-[#D12626] hover:text-white hover:border-[#D12626]`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={() => scroll('right')} className={`w-14 h-14 pointer-events-auto flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} hover:bg-[#D12626] hover:text-white hover:border-[#D12626]`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
