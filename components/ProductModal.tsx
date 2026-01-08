
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-5xl h-fit max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-black/10 hover:bg-black/20 p-3 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="w-full md:w-1/2 aspect-square md:h-auto bg-[#EFECE7]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#D12626] border border-[#D12626]/30 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">{product.name}</h2>
              <p className="text-2xl font-black italic text-[#D12626]">${product.price.toFixed(2)}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3">Our Story</h3>
                <p className="text-lg leading-relaxed font-medium opacity-70 italic">
                  {product.description || "Every ingredient is chosen with purpose, sourced from local farmers who share our passion for high-quality, sustainable food."}
                </p>
              </div>

              {product.ingredients && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3">Ingredients</h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="text-sm font-bold opacity-80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D12626] rounded-full"></span>
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/5">
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-[#D12626] text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-[#D12626]/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Add to Cart — ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
