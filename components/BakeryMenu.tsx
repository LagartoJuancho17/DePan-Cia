
import React, { useEffect, useRef } from 'react';
import { FULL_MENU } from '../constants';

const BakeryMenu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(r => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={containerRef} className="py-32 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <p className="text-[#D12626] text-xs font-bold uppercase tracking-[0.3em] mb-4">La Colección</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Del Obrador</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {FULL_MENU.map((cat, i) => (
            <div key={i} className={`space-y-12 reveal`} style={{ transitionDelay: `${i * 150}ms` }}>
              <h3 className="text-xl font-black uppercase tracking-tighter border-b-2 border-[#D12626] inline-block pb-1">
                {cat.category}
              </h3>
              <div className="space-y-10">
                {cat.items.map((item, j) => (
                  <div key={j} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-[#D12626] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-black/5 border-dashed"></div>
                      <span className="text-sm font-black opacity-40">${item.price}</span>
                    </div>
                    <p className="text-sm opacity-50 font-medium leading-relaxed italic pr-8">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal">
          <p className="text-sm opacity-40 italic max-w-lg mx-auto">
            Nuestro menú cambia con las estaciones y los caprichos de la levadura salvaje. Visítanos temprano para disfrutar de la mejor selección.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BakeryMenu;
