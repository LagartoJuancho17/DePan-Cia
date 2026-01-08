
import React from 'react';

const CollectionCutouts: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#efede9]/30 mt-20">
      <div className="text-center z-10 space-y-8 px-6">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">Freshly<br/>Squeezed & Baked</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white px-8 py-6 rounded-3xl text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl shadow-black/5">
            Order Pickup
          </button>
          <button className="bg-white px-8 py-6 rounded-3xl text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl shadow-black/5">
            Order Delivery
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <img 
        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80" 
        className="absolute top-10 left-[10%] w-32 md:w-56 -rotate-12 opacity-20 hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ animation: 'float 6s ease-in-out infinite' }}
        alt=""
      />
      <img 
        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80" 
        className="absolute bottom-10 right-[15%] w-40 md:w-64 rotate-12 opacity-20 hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ animation: 'float 8s ease-in-out infinite 1s' }}
        alt=""
      />
      <img 
        src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=300&q=80" 
        className="absolute top-[20%] right-[10%] w-24 md:w-44 rotate-6 opacity-20 hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}
        alt=""
      />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
          100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
        }
      `}</style>
    </section>
  );
};

export default CollectionCutouts;
