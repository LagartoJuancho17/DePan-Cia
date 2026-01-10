
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  tags: string[];
  description?: string;
  ingredients?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Collection {
  id: string;
  title: string;
  products: Product[];
}

export interface SectionContent {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
  imagePosition: 'left' | 'right';
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
}
