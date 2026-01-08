
import React from 'react';
import { SectionContent } from '../types';

interface Props {
  content: SectionContent;
}

const TwoUpSection: React.FC<Props> = ({ content }) => {
  const isRight = content.imagePosition === 'right';

  return (
    <section className={`flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
      <div className="flex-1 w-full">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5">
          <img 
            src={content.image} 
            alt={content.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-md">
          {content.subtitle}
        </p>
        <a 
          href={content.link} 
          className="inline-block text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:opacity-50 transition-opacity"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
};

export default TwoUpSection;
