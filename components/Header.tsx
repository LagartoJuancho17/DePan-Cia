
import React, { useState, useEffect } from 'react';

interface Props {
  onNavigate: (view: 'home' | 'shop' | 'about' | 'news' | 'menu') => void;
  currentView: 'home' | 'shop' | 'about' | 'news' | 'menu';
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<Props> = ({ onNavigate, currentView, cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsClosing(false);
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = (view?: 'home' | 'shop' | 'about' | 'news' | 'menu') => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
      document.body.style.overflow = '';
      if (view) onNavigate(view);
    }, 600);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || currentView !== 'home' ? 'bg-[#fcfaf7]/90 backdrop-blur-md py-3 shadow-sm' : 'py-6'
      }`}>
        <nav className="flex items-center justify-between px-4 md:px-12 max-w-[1920px] mx-auto">
          <button 
            onClick={openMenu}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#D12626] transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[1px] bg-current"></span>
              <span className="w-3 h-[1px] bg-current transition-all group-hover:w-5"></span>
            </div>
            Menu
          </button>
          
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-[#2a2a2a] group"
          >
            Pan<span className="text-[#D12626] transition-transform duration-500 inline-block group-hover:rotate-12">&</span>Cia
          </button>

          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => onNavigate('menu')}
              className={`hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${currentView === 'menu' ? 'text-[#D12626]' : 'hover:text-[#D12626]'}`}
            >
              Menú
            </button>
            <button 
              onClick={() => onNavigate('news')}
              className={`hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${currentView === 'news' ? 'text-[#D12626]' : 'hover:text-[#D12626]'}`}
            >
              Novedades
            </button>
            
            <button 
              onClick={onOpenCart}
              className="relative group p-2 hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 text-[#2a2a2a] group-hover:text-[#D12626] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D12626] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => onNavigate('shop')}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] bg-[#D12626] text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg shadow-[#D12626]/20"
            >
              Ordena Ahora
            </button>
          </div>
        </nav>
      </header>

      {/* Full Menu Overlay - Slide Left to Right */}
      {isMenuOpen && (
        <div 
          className={`fixed inset-0 z-[100] flex ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
        >
          {/* Sombreado de fondo */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => closeMenu()}
          />
          
          {/* Contenido del Menú */}
          <div className={`relative w-full md:w-[60vw] h-full bg-[#2a2a2a] text-[#fcfaf7] p-8 md:p-20 flex flex-col overflow-y-auto ${isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'}`}>
            <div className="flex justify-between items-center mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D12626]">Pan&Cia Bakery</span>
              <button 
                onClick={() => closeMenu()}
                className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                Close <span className="w-8 h-[1px] bg-white group-hover:bg-[#D12626] transition-colors"></span>
              </button>
            </div>
            
            <div className="flex-grow flex items-center">
              <nav className="flex flex-col gap-6 md:gap-10">
                {[
                  { label: 'Nuestro Menú', view: 'menu' as const },
                  { label: 'Comprar Online', view: 'shop' as const },
                  { label: 'Nosotros', view: 'about' as const },
                  { label: 'Novedades', view: 'news' as const }
                ].map((item, idx) => (
                  <button 
                    key={item.view}
                    onClick={() => closeMenu(item.view)} 
                    className="text-5xl md:text-8xl font-black tracking-[calc(-0.05em)] uppercase text-left hover:text-[#D12626] hover:italic transition-all duration-500 reveal active"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row gap-12 justify-between items-start md:items-center">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Contact</p>
                <p className="text-sm font-bold">hola@pancia.la</p>
              </div>
              <div className="flex gap-6">
                {['IG', 'FB', 'TW'].map(s => (
                  <a key={s} href="#" className="text-sm font-bold hover:text-[#D12626] transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
