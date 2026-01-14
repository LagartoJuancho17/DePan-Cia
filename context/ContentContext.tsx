
import React, { createContext, useContext, useState, useEffect } from 'react';
import { COLLECTIONS as INITIAL_COLLECTIONS, SECTIONS as INITIAL_SECTIONS, LOCATIONS as INITIAL_LOCATIONS, NEWS_ITEMS as INITIAL_NEWS, ABOUT_CONTENT as INITIAL_ABOUT } from '../constants';
import { Collection, SectionContent, Product, NewsItem, AboutContent } from '../types';

interface ContentContextType {
  collections: Collection[];
  sections: SectionContent[];
  locations: typeof INITIAL_LOCATIONS;
  news: NewsItem[];
  aboutContent: AboutContent;
  updateCollection: (updatedCollection: Collection) => void;
  // Collection CRUD
  addCollection: (title: string, id: string) => void;
  deleteCollection: (id: string) => void;
  
  // Product CRUD
  addProduct: (collectionId: string, product: Product) => void;
  updateProduct: (collectionId: string, updatedProduct: Product) => void;
  deleteProduct: (collectionId: string, productId: string) => void;
  
  updateSection: (index: number, updatedSection: SectionContent) => void;
  updateNewsItem: (updatedNews: NewsItem) => void;
  updateAboutContent: (updatedAbout: AboutContent) => void;
  isAdmin: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collections, setCollections] = useState<Collection[]>(() => {
    const saved = localStorage.getItem('pan-cia-collections-v2');
    if (saved) {
      try {
        const parsedSaved: Collection[] = JSON.parse(saved);
        // Merge strategy:
        // 1. Start with saved data to keep user edits/order.
        // 2. Add any collections from INITIAL that aren't in saved (by ID).
        // 3. For existing collections, add any products from INITIAL that aren't in saved (by ID).
        
        const merged = [...parsedSaved];
        
        INITIAL_COLLECTIONS.forEach(initCol => {
          const existingColIndex = merged.findIndex(c => c.id === initCol.id);
          
          if (existingColIndex === -1) {
            // New collection found in code, add it
            merged.push(initCol);
          } else {
            // Collection exists, check for new products
            const existingCol = merged[existingColIndex];
            const newProducts = initCol.products.filter(
              initProd => !existingCol.products.some(p => p.id === initProd.id)
            );
            
            if (newProducts.length > 0) {
              merged[existingColIndex] = {
                ...existingCol,
                products: [...existingCol.products, ...newProducts]
              };
            }
          }
        });
        
        return merged;
      } catch (e) {
        console.error('Error parsing saved collections:', e);
        return INITIAL_COLLECTIONS;
      }
    }
    return INITIAL_COLLECTIONS;
  });

  const [sections, setSections] = useState<SectionContent[]>(() => {
    const saved = localStorage.getItem('pan-cia-sections-v2');
    return saved ? JSON.parse(saved) : INITIAL_SECTIONS;
  });

  const [locations, setLocations] = useState(INITIAL_LOCATIONS);

  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('pan-cia-news-v2');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    const saved = localStorage.getItem('pan-cia-about-v2');
    return saved ? JSON.parse(saved) : INITIAL_ABOUT;
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('pan-cia-collections-v2', JSON.stringify(collections));
    } catch (e) {
      console.error('Failed to save collections:', e);
      alert('Storage limit exceeded. Some changes might not be saved. Try simpler images.');
    }
  }, [collections]);

  useEffect(() => {
    try {
      localStorage.setItem('pan-cia-sections-v2', JSON.stringify(sections));
    } catch (e) {
      console.error('Failed to save sections:', e);
    }
  }, [sections]);

  useEffect(() => {
    try {
      localStorage.setItem('pan-cia-news-v2', JSON.stringify(news));
    } catch (e) {
      console.error('Failed to save news:', e);
    }
  }, [news]);

  useEffect(() => {
    try {
      localStorage.setItem('pan-cia-about-v2', JSON.stringify(aboutContent));
    } catch (e) {
      console.error('Failed to save about content:', e);
    }
  }, [aboutContent]);

  const updateCollection = (updatedCollection: Collection) => {
    setCollections(prev => prev.map(c => c.id === updatedCollection.id ? updatedCollection : c));
  };

  const addCollection = (title: string, id: string) => {
    setCollections(prev => [...prev, { id, title, products: [] }]);
  };

  const deleteCollection = (id: string) => {
    setCollections(prev => prev.filter(c => c.id !== id));
  };

  const addProduct = (collectionId: string, product: Product) => {
    setCollections(prev => prev.map(c => {
      if (c.id === collectionId) {
        return { ...c, products: [...c.products, product] };
      }
      return c;
    }));
  };

  const updateProduct = (collectionId: string, updatedProduct: Product) => {
    setCollections(prev => prev.map(c => {
      if (c.id === collectionId) {
        return {
          ...c,
          products: c.products.map(p => p.id === updatedProduct.id ? updatedProduct : p)
        };
      }
      return c;
    }));
  };

  const deleteProduct = (collectionId: string, productId: string) => {
    setCollections(prev => prev.map(c => {
      if (c.id === collectionId) {
        return {
          ...c,
          products: c.products.filter(p => p.id !== productId)
        };
      }
      return c;
    }));
  };

  const updateSection = (index: number, updatedSection: SectionContent) => {
    setSections(prev => prev.map((s, i) => i === index ? updatedSection : s));
  };

  const updateNewsItem = (updatedNews: NewsItem) => {
    setNews(prev => prev.map(n => n.id === updatedNews.id ? updatedNews : n));
  };

  const updateAboutContent = (updatedAbout: AboutContent) => {
    setAboutContent(updatedAbout);
  };

  const login = (user: string, pass: string) => {
    if (user === 'totoloco' && pass === 'admin1234') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  return (
    <ContentContext.Provider value={{ 
      collections, 
      sections, 
      locations, 
      news,
      aboutContent,
      updateCollection, 
      addCollection,
      deleteCollection,
      addProduct,
      updateProduct,
      deleteProduct,
      updateSection,
      updateNewsItem,
      updateAboutContent,
      isAdmin,
      login,
      logout
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
