import React, { useState } from 'react';
import { CartItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
}

const CheckoutModal: React.FC<Props> = ({ isOpen, onClose, items, subtotal }) => {
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleCheckout = (location: 'Villa Luro' | 'Plaza Irlanda') => {
    // 1. Generate unique order code (e.g., #A1B2)
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // 2. Format items list
    const itemsList = items.map(item => 
      `• ${item.quantity}x ${item.product.name} ($${(item.product.price * item.quantity).toFixed(2)})`
    ).join('\n');

    // 3. Construct message
    const message = `Hola, soy ${name}. Quería hacer el siguiente pedido:\n\n${itemsList}\n\nTotal: $${subtotal.toFixed(2)}\nCódigo de Pedido: #${code}\n\nSucursal: ${location}`;

    // 4. Redirect to WhatsApp with proper encoding
    const phone = '541138032652';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Finalizar Pedido</h2>
        <p className="text-sm opacity-60 mb-6">Completa tus datos para coordinar el retiro.</p>

        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Tu Nombre</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Tobias Arraiza"
              className="w-full bg-[#fcfaf7] border border-black/10 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-[#D12626] transition-colors"
              autoFocus
            />
          </div>

          <div className="pt-4 border-t border-black/5">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4 text-center">Selecciona Sucursal de Retiro</p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleCheckout('Villa Luro')}
                disabled={!name.trim()}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-black/5 hover:border-[#D12626] hover:bg-[#D12626]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all gap-2 group"
              >
                <span className="text-xs font-black uppercase tracking-wider group-hover:text-[#D12626]">Villa Luro</span>
              </button>
              
              <button 
                onClick={() => handleCheckout('Plaza Irlanda')}
                disabled={!name.trim()}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-black/5 hover:border-[#D12626] hover:bg-[#D12626]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all gap-2 group"
              >
                <span className="text-xs font-black uppercase tracking-wider group-hover:text-[#D12626]">Plaza Irlanda</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
