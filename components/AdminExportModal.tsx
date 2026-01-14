
import React, { useState, useEffect } from 'react';
import { Collection, NewsItem, SectionContent, AboutContent } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  collections: Collection[];
  sections: SectionContent[];
  news: NewsItem[];
  aboutContent: AboutContent;
}

const AdminExportModal: React.FC<Props> = ({ isOpen, onClose, collections, sections, news, aboutContent }) => {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const generatedCode = generateCode(collections, sections, news, aboutContent);
      setCode(generatedCode);
    }
  }, [isOpen, collections, sections, news, aboutContent]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-black/5 flex justify-between items-center bg-[#fcfaf7]">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-[#D12626]">Export Source Code</h2>
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mt-1">Copy this into your 'constants.tsx' file</p>
          </div>
          <button onClick={onClose} className="text-xl font-bold hover:text-[#D12626]">&times;</button>
        </div>

        {/* Code Area */}
        <div className="flex-grow p-0 relative bg-[#1e1e1e]">
          <textarea 
            readOnly
            value={code}
            className="w-full h-full p-6 bg-transparent text-gray-300 font-mono text-xs resize-none outline-none"
            spellCheck={false}
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-black/5 bg-white flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-black/5 transition-colors"
          >
            Close
          </button>
          <button 
            onClick={handleCopy}
            className={`px-8 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-white transition-all transform hover:scale-105 active:scale-95 ${copied ? 'bg-green-600' : 'bg-[#D12626]'}`}
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to format objects as clean TS code
const generateCode = (
  collections: Collection[],
  sections: SectionContent[],
  news: NewsItem[],
  aboutContent: AboutContent
) => {
  return `
import { Product, Collection, SectionContent, NewsItem, AboutContent } from './types';

export const COLLECTIONS: Collection[] = ${JSON.stringify(collections, null, 2).replace(/"([^"]+)":/g, '$1:')};

export const NEWS_ITEMS: NewsItem[] = ${JSON.stringify(news, null, 2).replace(/"([^"]+)":/g, '$1:')};

export const FULL_MENU = [
  {
    category: 'Hogazas de Masa Madre',
    items: [
      { name: 'Blanco Rústico', desc: 'Nuestra hogaza insignia fermentada 48 horas.', price: '9.50' },
      { name: 'Centeno Danés', desc: 'Denso, oscuro y repleto de semillas de girasol.', price: '11.00' },
      { name: 'Batard de Semillas', desc: 'Sésamo tostado, lino y semillas de calabaza.', price: '10.50' },
      { name: 'Aceitunas y Romero', desc: 'Aceitunas Kalamata con romero fresco del huerto.', price: '11.50' },
    ]
  },
  {
    category: 'Bollería',
    items: [
      { name: 'Croissant Clásico', desc: 'Mantequilla Isigny Ste Mère, 27 capas.', price: '4.75' },
      { name: 'Caracola de Pistacho', desc: 'Crema de pistacho y trozos tostados.', price: '6.50' },
      { name: 'Galette de Fruta', desc: 'Formada a mano con fruta del mercado local.', price: '7.00' },
      { name: 'Pain Suisse', desc: 'Crema pastelera y chips de chocolate.', price: '6.00' },
    ]
  },
  {
    category: 'Cocina y Café',
    items: [
      { name: 'Tostada de Aguacate', desc: 'Masa madre, limón, chili, rábano.', price: '14.00' },
      { name: 'Croque Monsieur', desc: 'Jamón de la casa, gruyère, bechamel.', price: '16.00' },
      { name: 'Flat White', desc: 'Granos brasileños de origen ético.', price: '4.50' },
      { name: 'Matcha Batido', desc: 'Grado ceremonial de Uji.', price: '6.50' },
    ]
  }
];

export const SECTIONS: SectionContent[] = ${JSON.stringify(sections, null, 2).replace(/"([^"]+)":/g, '$1:')};

export const INSTAGRAM_POSTS = [
  { id: 1, url: '/images/instagram/fotoInstagram1.jpg', caption: 'Mini cake' },
  { id: 2, url: '/images/instagram/fotoInstagram2.jpg', caption: 'Pan Dulce' },
  { id: 3, url: '/images/instagram/fotoInstagram3.jpg', caption: 'Pannetone con Naranjas Confitadas' },
  { id: 4, url: '/images/instagram/fotoInstagram4.jpg', caption: 'Mini Bombones.' },
];

export const LOCATIONS = [
  { name: 'Villa Luro', address: 'Manzoni 30', phone: '(310) 439-2894', mapUrl: 'https://maps.app.goo.gl/rkqGnUa7outH3wkr9' },
  { name: 'Plaza Irlanda', address: 'Av. Donato Alvarez 900', phone: '(747) 205-2279', mapUrl: 'https://maps.app.goo.gl/3Jy8CANzUQbQn9CR7' },
];

export const ABOUT_CONTENT: AboutContent = ${JSON.stringify(aboutContent, null, 2).replace(/"([^"]+)":/g, '$1:')};

export const MARQUEE_WORDS = ['artesanal', 'chipa', 'medialunas', 'toto', 'comunidad', 'artesanal', 'cookies', 'sandwiches', 'café', 'torta'];
`;
};

export default AdminExportModal;
