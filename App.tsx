
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductFeature from './components/ProductFeature';
import BakeryMenu from './components/BakeryMenu';
import Marquee from './components/Marquee';
import TwoUpSection from './components/TwoUpSection';
import CollectionCutouts from './components/CollectionCutouts';
import InstagramSection from './components/InstagramSection';
import AIService from './components/AIService';
import ShopAll from './components/ShopAll';
import About from './components/About';
import News from './components/News';
import MenuView from './components/MenuView';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import AdminPanel from './components/AdminPanel';
import { useContent } from './context/ContentContext';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const { collections, sections, locations } = useContent();
  const [view, setView] = useState<'home' | 'shop' | 'about' | 'news' | 'menu'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeCollectionId, setActiveCollectionId] = useState(collections[0].id);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('pan-cia-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('pan-cia-cart', JSON.stringify(cart));
  }, [cart]);

  // Manejador de navegación con animación
  const handleNavigate = (newView: typeof view) => {
    if (newView === view) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setView(newView);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[#D12626] selection:text-white">
      <Header 
        onNavigate={handleNavigate} 
        currentView={view} 
        cartCount={totalCartItems} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className={`flex-grow pt-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100 view-transition'}`}>
        {view === 'home' && (
          <>
            <Hero onShopClick={() => handleNavigate('shop')} />
            
            <ProductFeature 
              collections={collections} 
              activeId={activeCollectionId} 
              onSelect={setActiveCollectionId} 
              onAddToCart={addToCart}
              onViewDetails={setSelectedProduct}
            />

            <BakeryMenu />

            <Marquee />

            <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-32 space-y-48">
              {sections.map((section, idx) => (
                <div key={idx} className="reveal">
                  <TwoUpSection content={section} />
                </div>
              ))}
            </div>

            <div className="reveal">
              <CollectionCutouts />
            </div>

            <div className="reveal">
              <InstagramSection />
            </div>
          </>
        )}

        {view === 'menu' && (
          <MenuView 
            onBack={() => handleNavigate('home')} 
            onAddToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        )}

        {view === 'shop' && (
          <ShopAll 
            collections={collections} 
            onBack={() => handleNavigate('home')} 
            onAddToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        )}

        {view === 'about' && (
          <About onBack={() => handleNavigate('home')} />
        )}

        {view === 'news' && (
          <News onBack={() => handleNavigate('home')} />
        )}

        <section className="bg-[#efede9]/30 py-32 px-8 border-t border-black/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-left">
            {locations.map((loc, i) => (
              <div key={i} className="space-y-6 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#D12626]">{loc.name}</h3>
                <p className="text-2xl font-bold tracking-tight leading-tight">{loc.address}</p>
                <p className="opacity-40 text-sm font-bold">{loc.phone}</p>
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#D12626] hover:border-[#D12626] transition-all">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#fcfaf7] py-20 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6 max-w-sm">
            <h3 className="text-3xl font-black tracking-tighter uppercase">Pan<span className="text-[#D12626]">&</span>Cia</h3>
            <p className="text-sm opacity-50 leading-relaxed font-medium">
              We believe in the transformative power of slow food. Handmade with love in Los Angeles.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW'].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[9px] font-bold hover:bg-[#D12626] hover:text-white hover:border-[#D12626] transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-30">Shop</h4>
              <ul className="text-sm space-y-3 font-bold">
                <li><button onClick={() => handleNavigate('menu')} className="hover:text-[#D12626] transition-colors text-left">Menú</button></li>
                <li><button onClick={() => handleNavigate('shop')} className="hover:text-[#D12626] transition-colors text-left">Comprar Online</button></li>
                <li><button onClick={() => handleNavigate('news')} className="hover:text-[#D12626] transition-colors text-left">Novedades</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-30">Company</h4>
              <ul className="text-sm space-y-3 font-bold">
                <li><button onClick={() => handleNavigate('about')} className="hover:text-[#D12626] transition-colors text-left">Nosotros</button></li>
                <li><a href="#" className="hover:text-[#D12626] transition-colors">Workshops</a></li>
                <li><a href="#" className="hover:text-[#D12626] transition-colors">Journal</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">© 2024 Pan&Cia Bakery. Sourdough specialists.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-30">
            <a href="#" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <AIService />
      <AdminPanel />
    </div>
  );
};

export default App;
