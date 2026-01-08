
import React, { useEffect, useState, useRef } from 'react';
import { Collection, Product } from '../types';

interface Props {
  collections: Collection[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ShopAll: React.FC<Props> = ({ collections, onBack, onAddToCart, onViewDetails }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const products: Product[] = [];
    const seenIds = new Set();
    collections.forEach(c => {
      c.products.forEach(p => {
        if (!seenIds.has(p.id)) {
          products.push(p);
          seenIds.add(p.id);
        }
      });
    });
    setAllProducts(products);
  }, [collections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [allProducts, filter]);

  const filteredProducts = filter === 'all' 
    ? allProducts 
    : collections.find(c => c.id === filter)?.products || [];

  return (
    <div className="bg-[#FAF9F7] min-h-screen pb-32" ref={containerRef}>
      <div className="px-4 md:px-12 pt-16 md:pt-24 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 px-2 md:px-0">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <button 
              onClick={onBack}
              className="text-[#D12626] text-[10px] font-black uppercase tracking-[0.3em] mb-4 hover:opacity-50 transition-opacity flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back Home
            </button>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              The Full<br/>Collection
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 animate-in fade-in slide-in-from-right duration-700">
            <button onClick={() => setFilter('all')} className={`text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 transition-all ${filter === 'all' ? 'border-[#D12626] text-[#D12626]' : 'border-transparent opacity-30 hover:opacity-100'}`}>All items</button>
            {collections.map(c => (
              <button key={c.id} onClick={() => setFilter(c.id)} className={`text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 transition-all ${filter === c.id ? 'border-[#D12626] text-[#D12626]' : 'border-transparent opacity-30 hover:opacity-100'}`}>{c.title}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] bg-black/5 border-t border-black/5">
          {filteredProducts.map((product, idx) => (
            <div 
              key={`${filter}-${product.id}`} 
              onClick={() => onViewDetails(product)}
              className="bg-white reveal-item flex flex-col group cursor-pointer overflow-hidden" 
              style={{ transitionDelay: `${(idx % 8) * 50}ms` }}
            >
              <div className="aspect-square bg-[#EFECE7] flex items-center justify-center p-4 md:p-12 overflow-hidden relative transition-colors duration-500 group-hover:bg-[#F3EFEA]">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-[#D12626]/10">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="p-4 md:p-8 space-y-2 md:space-y-3 bg-[#FAF9F7] flex-grow flex flex-col justify-between transition-colors group-hover:bg-white">
                <div>
                  <h3 className="text-[#D12626] text-[10px] md:text-base font-black uppercase tracking-tight leading-tight line-clamp-2 md:line-clamp-none">
                    {product.name}
                  </h3>
                  <p className="text-[#D12626] text-[11px] md:text-sm font-black mt-1">${product.price.toFixed(2)}</p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <div className="flex flex-wrap gap-1.5 flex-grow">
                    {product.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#D12626] border border-[#D12626]/30 px-2 py-1 md:px-3 md:py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                    className="bg-[#D12626] text-white p-2 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-100 md:opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-90"
                  >
                    <span className="hidden md:inline">+ Add</span>
                    <span className="md:hidden">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
