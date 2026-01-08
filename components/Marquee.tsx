
import React from 'react';
import { MARQUEE_WORDS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <section className="bg-[#fcfaf7] border-y border-black/5 py-12 marquee-container">
      <div className="marquee-content flex gap-12 md:gap-24">
        {MARQUEE_WORDS.map((word, idx) => (
          <span key={idx} className="text-5xl md:text-8xl font-bold uppercase tracking-tighter opacity-10 italic">
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
