
import React from 'react';
import { INSTAGRAM_POSTS } from '../constants';

const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest opacity-40">Social</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Seguinos en Instagram</h2>
        </div>
        <a 
          href="https://www.instagram.com/depan_cia/" 
          className="text-xs font-bold uppercase tracking-widest border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all"
        >
          @depan_cia
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INSTAGRAM_POSTS.map(post => (
          <div key={post.id} className="group relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl md:rounded-3xl">
            <img 
              src={post.url} 
              alt={post.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
              <p className="text-white text-sm font-medium leading-relaxed">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
