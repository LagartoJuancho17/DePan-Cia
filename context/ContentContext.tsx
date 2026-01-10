
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
  updateProduct: (collectionId: string, updatedProduct: Product) => void;
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
    const saved = localStorage.getItem('pan-cia-collections');
    return saved ? JSON.parse(saved) : INITIAL_COLLECTIONS;
  });

  const [sections, setSections] = useState<SectionContent[]>(() => {
    const saved = localStorage.getItem('pan-cia-sections');
    return saved ? JSON.parse(saved) : INITIAL_SECTIONS;
  });

  const [locations, setLocations] = useState(() => {
    const saved = localStorage.getItem('pan-cia-locations');
    return saved ? JSON.parse(saved) : INITIAL_LOCATIONS;
  });

  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('pan-cia-news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    const saved = localStorage.getItem('pan-cia-about');
    return saved ? JSON.parse(saved) : INITIAL_ABOUT;
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('pan-cia-collections', JSON.stringify(collections));
  }, [collections]);

  useEffect(() => {
    localStorage.setItem('pan-cia-sections', JSON.stringify(sections));
  }, [sections]);

  useEffect(() => {
    localStorage.setItem('pan-cia-news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('pan-cia-about', JSON.stringify(aboutContent));
  }, [aboutContent]);

  const updateCollection = (updatedCollection: Collection) => {
    setCollections(prev => prev.map(c => c.id === updatedCollection.id ? updatedCollection : c));
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
      updateProduct,
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
