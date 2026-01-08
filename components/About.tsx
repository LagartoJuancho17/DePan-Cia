
import React from 'react';

interface Props {
  onBack: () => void;
}

const About: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80" 
          alt="Artisan hands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="text-white text-xs font-black uppercase tracking-[0.4em] mb-6">Nuestra Esencia</p>
            <h1 className="text-white text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8]">
              El Arte de lo<br/><span className="text-[#D12626]">Lento</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 reveal">
            <p className="text-[#D12626] text-xs font-black uppercase tracking-widest">Desde 2021</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
              Harina, Agua, Sal y sobre todo, <span className="italic">Tiempo</span>.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-black/60 leading-relaxed font-medium">
              <p>
                En Pan&Cia, no creemos en los atajos. Cada una de nuestras hogazas es el resultado de una fermentación natural de 48 horas, permitiendo que las levaduras salvajes desbloqueen sabores y texturas que la panadería industrial ha olvidado.
              </p>
              <p>
                Lo que comenzó como un pequeño experimento en una cocina de Los Ángeles, se ha convertido en un santuario para aquellos que valoran la honestidad en su mesa.
              </p>
            </div>
            <button 
              onClick={onBack}
              className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-2 hover:text-[#D12626] hover:border-[#D12626] transition-all"
            >
              Volver al Inicio
            </button>
          </div>
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1589367920969-ab8e050be022?auto=format&fit=crop&w=1200&q=80" 
                alt="Bread scoring" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white max-w-[240px]">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Dato de Maestro</p>
                <p className="text-sm font-bold leading-snug">Cada corte es una firma única que permite al pan respirar y crecer en el horno.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[#efede9]/50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#D12626] mb-4">Nuestros Pilares</h3>
            <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Lo que nos hace Pan&Cia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Materia Prima",
                desc: "Harinas orgánicas de molino de piedra, sal marina pura y agua filtrada. Sin conservantes, sin compromisos.",
                img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Tradición Viva",
                desc: "Nuestra masa madre tiene 3 años de vida, alimentada diariamente para mantener un equilibrio perfecto de acidez.",
                img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Comunidad",
                desc: "Más que una panadería, somos un punto de encuentro. Apoyamos a productores locales y artesanos vecinos.",
                img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80"
              }
            ].map((pillar, i) => (
              <div key={i} className="text-center space-y-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tight">{pillar.title}</h4>
                  <p className="text-black/50 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="h-[50vh] w-full overflow-hidden reveal">
        <img 
          src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=2000&q=80" 
          alt="Pastries showcase" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8 reveal">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">¿Listo para probar<br/>la diferencia?</h2>
          <button 
            onClick={onBack}
            className="bg-[#D12626] text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl shadow-[#D12626]/30"
          >
            Explorar la Colección
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
