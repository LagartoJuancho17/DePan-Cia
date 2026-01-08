
import React from 'react';
import { CartItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<Props> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#fcfaf7] z-[101] shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-8 border-b border-black/5 flex justify-between items-center bg-white">
            <div className={`${isOpen ? 'animate-slide-up' : ''}`}>
              <h2 className="text-2xl font-black uppercase tracking-tighter italic">Tu Carrito</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#D12626]">{items.length} artículos</p>
            </div>
            <button onClick={onClose} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#D12626]">
              Cerrar <span className="w-8 h-[1px] bg-black group-hover:bg-[#D12626] transition-all duration-300"></span>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8 hide-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 animate-fade-in">
                <div className="text-6xl animate-bounce">🥐</div>
                <p className="text-sm font-black uppercase tracking-widest">Tu carrito está vacío</p>
                <button onClick={onClose} className="text-[10px] border-b border-black pb-1 hover:text-[#D12626] hover:border-[#D12626] transition-colors">Seguir Comprando</button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div 
                  key={item.product.id} 
                  className="flex gap-6 group opacity-0 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#efede9] flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-tight text-[#D12626]">{item.product.name}</h3>
                        <p className="text-[10px] font-medium opacity-40 italic mt-1">${item.product.price.toFixed(2)} c/u</p>
                      </div>
                      <button 
                        onClick={() => onRemove(item.product.id)} 
                        className="opacity-20 hover:opacity-100 group-hover:opacity-100 transition-all p-1 -mr-2 text-black hover:text-[#D12626]"
                        title="Eliminar producto"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-black/10 rounded-full bg-white overflow-hidden shadow-sm">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, -1)} 
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-[#D12626]/5 hover:text-[#D12626] transition-colors font-bold active:bg-[#D12626]/10"
                        >
                          {item.quantity === 1 ? (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                          ) : '−'}
                        </button>
                        <span className="text-[10px] font-black w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, 1)} 
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-[#D12626]/5 hover:text-[#D12626] transition-colors font-bold active:bg-[#D12626]/10"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-black italic tracking-tighter">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-8 bg-white border-t border-black/5 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span>Envío (Local)</span>
                  <span className="text-[#D12626] font-black">Free</span>
                </div>
                <div className="flex justify-between text-2xl font-black uppercase tracking-tighter pt-4 border-t border-black/[0.03]">
                  <span>Total</span>
                  <span className="text-[#D12626]">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-[#D12626] text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#D12626]/20 hover:shadow-[#D12626]/40 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300">
                Finalizar Compra
              </button>
              <p className="text-[9px] text-center opacity-30 font-bold uppercase tracking-widest">Procesado con seguridad SSL</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
