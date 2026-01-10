
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Product, NewsItem } from '../types';
import ImageUploader from './ImageUploader';

const AdminPanel: React.FC = () => {
  const { 
    isAdmin, 
    collections, 
    sections, 
    news, 
    aboutContent,
    updateProduct, 
    updateSection, 
    updateNewsItem, 
    updateAboutContent,
    logout 
  } = useContent();
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'menu' | 'sections' | 'about' | 'news'>('menu');
  const [selectedCollectionId, setSelectedCollectionId] = useState(collections[0].id);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // States for form inputs
  const [editForm, setEditForm] = useState<Partial<Product>>({});
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  if (!isAdmin) return null;

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setEditForm({ ...product });
  };

  const handleSaveProduct = () => {
    if (editingProduct && editForm) {
      const updated = { ...editingProduct, ...editForm } as Product;
      updateProduct(selectedCollectionId, updated);
      setEditingProduct(null);
      setEditForm({});
    }
  };

  const handleSaveAbout = (key: string, value: any) => {
    updateAboutContent({ ...aboutContent, [key]: value });
  };

  const activeCollection = collections.find(c => c.id === selectedCollectionId);

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[90] bg-[#D12626] text-white px-6 py-4 rounded-full shadow-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-2"
      >
        <span className="text-xl">⚙</span> Admin Panel
      </button>

      {/* Panel Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[600px] bg-white shadow-2xl z-[100] transform transition-transform duration-500 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Site Editor</h2>
            <div className="flex gap-4">
              <button onClick={logout} className="text-[10px] font-bold uppercase text-[#D12626] hover:underline">Logout</button>
              <button onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-[#D12626]">&times;</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['menu', 'sections', 'about', 'news'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-2 text-xs font-black uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? 'border-[#D12626] text-[#D12626]' : 'border-transparent opacity-30 hover:opacity-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'menu' && (
            <div className="space-y-8">
              {/* Collection Selector */}
              <div className="flex gap-2 overflow-x-auto pb-4">
                {collections.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => { setSelectedCollectionId(c.id); setEditingProduct(null); }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${selectedCollectionId === c.id ? 'bg-[#2a2a2a] text-white border-[#2a2a2a]' : 'border-black/10 hover:border-[#D12626]'}`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>

              {/* Product List or Edit Form */}
              {!editingProduct ? (
                <div className="space-y-4">
                  {activeCollection?.products.map(p => (
                    <div key={p.id} onClick={() => handleEditProduct(p)} className="flex items-center gap-4 p-4 border border-black/5 hover:border-[#D12626] cursor-pointer group bg-[#fcfaf7]">
                      <img src={p.image} className="w-12 h-12 object-cover bg-gray-200" alt="" />
                      <div className="flex-grow">
                        <p className="font-bold text-sm group-hover:text-[#D12626]">{p.name}</p>
                        <p className="text-xs opacity-50">${p.price}</p>
                      </div>
                      <span className="text-[#D12626] font-bold text-xs opacity-0 group-hover:opacity-100">Edit</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <button onClick={() => setEditingProduct(null)} className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 mb-4">&larr; Back to List</button>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Product Name</label>
                      <input 
                        className="w-full p-2 border border-black/10 focus:border-[#D12626] outline-none font-bold"
                        value={editForm.name || ''}
                        onChange={e => setEditForm({...editForm, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Price</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-black/10 focus:border-[#D12626] outline-none font-bold"
                        value={editForm.price || 0}
                        onChange={e => setEditForm({...editForm, price: parseFloat(e.target.value)})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Description</label>
                      <textarea 
                        className="w-full p-2 border border-black/10 focus:border-[#D12626] outline-none"
                        rows={3}
                        value={editForm.description || ''}
                        onChange={e => setEditForm({...editForm, description: e.target.value})}
                      />
                    </div>
                    
                    <ImageUploader 
                      label="Main Image"
                      currentImage={editForm.image}
                      onImageSelected={(base64) => setEditForm({...editForm, image: base64})}
                    />

                    <ImageUploader 
                      label="Hover Image"
                      currentImage={editForm.hoverImage}
                      onImageSelected={(base64) => setEditForm({...editForm, hoverImage: base64})}
                    />

                    <button 
                      onClick={handleSaveProduct}
                      className="w-full bg-[#D12626] text-white py-3 font-black uppercase tracking-widest text-xs hover:bg-black transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sections' && (
            <div className="space-y-8">
               {sections.map((section, idx) => (
                 <div key={idx} className="border border-black/5 p-6 bg-[#fcfaf7]">
                   <h3 className="text-xs font-black uppercase tracking-widest text-[#D12626] mb-4">Section {idx + 1}</h3>
                   <div className="space-y-4">
                     <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Title</label>
                       <input 
                         className="w-full p-2 border border-black/10 focus:border-[#D12626] outline-none font-bold"
                         value={section.title}
                         onChange={e => {
                           const newSec = { ...section, title: e.target.value };
                           updateSection(idx, newSec);
                         }}
                       />
                     </div>
                     <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Subtitle</label>
                       <textarea 
                         className="w-full p-2 border border-black/10 focus:border-[#D12626] outline-none text-sm"
                         rows={3}
                         value={section.subtitle}
                         onChange={e => {
                           const newSec = { ...section, subtitle: e.target.value };
                           updateSection(idx, newSec);
                         }}
                       />
                     </div>
                     <ImageUploader 
                       label="Section Image"
                       currentImage={section.image}
                       onImageSelected={(base64) => {
                         const newSec = { ...section, image: base64 };
                         updateSection(idx, newSec);
                       }}
                     />
                   </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-8">
              <div className="p-6 bg-[#fcfaf7] border border-black/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#D12626] mb-4">Hero Section</h3>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Title</label>
                        <input className="w-full p-2 border border-black/10 font-bold" value={aboutContent.heroTitle} onChange={e => handleSaveAbout('heroTitle', e.target.value)} />
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Subtitle</label>
                        <input className="w-full p-2 border border-black/10 font-bold" value={aboutContent.heroSubtitle} onChange={e => handleSaveAbout('heroSubtitle', e.target.value)} />
                     </div>
                   </div>
                   <ImageUploader label="Hero Image" currentImage={aboutContent.heroImage} onImageSelected={v => handleSaveAbout('heroImage', v)} />
                </div>
              </div>

              <div className="p-6 bg-[#fcfaf7] border border-black/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#D12626] mb-4">Narrative</h3>
                <div className="space-y-4">
                  <input className="w-full p-2 border border-black/10 font-bold" value={aboutContent.narrativeTitle} onChange={e => handleSaveAbout('narrativeTitle', e.target.value)} />
                  <textarea className="w-full p-2 border border-black/10 text-sm" rows={5} value={aboutContent.narrativeText.join('\n\n')} onChange={e => handleSaveAbout('narrativeText', e.target.value.split('\n\n'))} />
                  <ImageUploader label="Narrative Image" currentImage={aboutContent.narrativeImage} onImageSelected={v => handleSaveAbout('narrativeImage', v)} />
                </div>
              </div>

              <div className="p-6 bg-[#fcfaf7] border border-black/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#D12626] mb-4">Pillars</h3>
                {aboutContent.pillars.map((p, i) => (
                  <div key={i} className="mb-8 last:mb-0 border-b border-black/5 pb-4 last:border-0 last:pb-0">
                    <input className="w-full p-2 border border-black/10 font-bold mb-2" value={p.title} onChange={e => {
                        const newPillars = [...aboutContent.pillars];
                        newPillars[i] = { ...p, title: e.target.value };
                        handleSaveAbout('pillars', newPillars);
                      }} />
                    <textarea className="w-full p-2 border border-black/10 text-xs mb-2" value={p.desc} onChange={e => {
                        const newPillars = [...aboutContent.pillars];
                        newPillars[i] = { ...p, desc: e.target.value };
                        handleSaveAbout('pillars', newPillars);
                      }} />
                     <ImageUploader label="Pillar Image" currentImage={p.img} onImageSelected={v => {
                        const newPillars = [...aboutContent.pillars];
                        newPillars[i] = { ...p, img: v };
                        handleSaveAbout('pillars', newPillars);
                      }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'news' && (
             <div className="space-y-8">
               {news.map((item) => (
                 <div key={item.id} className="border border-black/5 p-6 bg-[#fcfaf7]">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <input className="w-2/3 p-2 border border-black/10 font-black uppercase text-lg" value={item.title} onChange={e => updateNewsItem({...item, title: e.target.value})} />
                        <input className="w-1/3 p-2 border border-black/10 text-xs font-bold uppercase" value={item.date} onChange={e => updateNewsItem({...item, date: e.target.value})} />
                      </div>
                      <input className="w-full p-2 border border-black/10 text-xs font-bold uppercase tracking-widest bg-white" value={item.category} onChange={e => updateNewsItem({...item, category: e.target.value})} />
                      <textarea className="w-full p-2 border border-black/10 text-sm" value={item.description} onChange={e => updateNewsItem({...item, description: e.target.value})} rows={3} />
                      <ImageUploader label="News Image" currentImage={item.image} onImageSelected={v => updateNewsItem({...item, image: v})} />
                    </div>
                 </div>
               ))}
             </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
