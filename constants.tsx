
import { Product, Collection, SectionContent, NewsItem } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'croissantes',
    title: 'Croissantes',
    products: [
      { 
        id: 'c1', 
        name: 'Classic Butter Croissant', 
        price: 4.75, 
        image: 'https://pngimg.com/d/croissant_PNG46693.png', 
        tags: ['Non-GMO'],
        description: 'Our signature 27-layer croissant, made with Isigny Ste Mère butter for an incomparable honeycomb crumb and golden, flaky crust.',
        ingredients: ['Organic Wheat Flour', 'Cultured Butter', 'Sea Salt', 'Organic Cane Sugar', 'Fresh Yeast']
      },
      { 
        id: 'c2', 
        name: 'Almond Twice-Baked', 
        price: 6.50, 
        image: 'https://danielsdonuts.com.au/wp-content/uploads/2025/02/DD_PNG_HiSylvia-15.png', 
        tags: ['Non-GMO'],
        description: 'Soaked in light rum syrup and filled with a thick layer of almond frangipane, then baked again for a nutty, caramelized crunch.',
        ingredients: ['Classic Croissant', 'California Almond Flour', 'Organic Eggs', 'Rum Syrup', 'Toasted Almond Slivers']
      },
      { 
        id: 'c3', 
        name: 'Valrhona Pain au Chocolat', 
        price: 5.75, 
        image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', 
        tags: ['Non-GMO'],
        description: 'Tucked inside our buttery dough are three bars of 70% dark Valrhona chocolate, offering a perfect balance of bitter and sweet.',
        ingredients: ['Organic Wheat Flour', 'Cultured Butter', 'Valrhona 70% Dark Chocolate', 'Sea Salt', 'Cane Sugar']
      },
      { id: 'c4', name: 'Pistachio Cream Escargot', price: 6.75, image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Spiraled pastry filled with rich pistachio pastry cream and roasted kernels.', ingredients: ['Pistachio Flour', 'Whole Milk', 'Vanilla Bean', 'Wheat Flour', 'Butter'] },
      { id: 'c5', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'c6', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'c7', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'c8', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
    ]
  },
  {
    id: 'cakes',
    title: 'Cakes',
    products: [
      { 
        id: 'k1', 
        name: 'Lemon Poppyseed Loaf', 
        price: 12.00, 
        image: '/images/menu/cakes/cake.webp', 
        tags: ['Non-GMO'],
        description: 'A dense, moist loaf infused with Meyer lemon zest and a generous amount of blue poppyseeds for texture.',
        ingredients: ['Organic Flour', 'Meyer Lemons', 'Blue Poppyseeds', 'Greek Yogurt', 'Extra Virgin Olive Oil']
      },
      { 
        id: 'k2', 
        name: 'Dark Chocolate Ganache', 
        price: 45.00, 
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80', 
        tags: ['Non-GMO', 'Vegan'],
        description: 'A rich, flourless-style cake made with cold-pressed cocoa and coconut milk, topped with a silk-smooth chocolate glaze.',
        ingredients: ['70% Cocoa', 'Coconut Milk', 'Maple Syrup', 'Almond Flour', 'Sea Salt']
      },
      { id: 'k3', name: 'Burnt Basque Cheesecake', price: 38.00, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Baked at high heat to achieve a deeply caramelized top while maintaining a custardy center.', ingredients: ['Cream Cheese', 'Heavy Cream', 'Organic Eggs', 'Vanilla Paste'] },
      { id: 'k4', name: 'Wild Berry Sponge', price: 14.00, image: 'https://images.unsplash.com/photo-1519340333755-5072120bc201?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'k5', name: 'Spiced Carrot Cake', price: 15.50, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
    ]
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    products: [
      { 
        id: 's1', 
        name: 'Prosciutto & Fig Baguette', 
        price: 14.50, 
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', 
        tags: ['Non-GMO'],
        description: '18-month aged Prosciutto di Parma paired with mission fig jam and triple-cream brie on a sourdough baguette.',
        ingredients: ['Sourdough Baguette', 'Prosciutto', 'Mission Figs', 'Brie Cheese', 'Wild Arugula']
      },
      { id: 's2', name: 'Heirloom Tomato Caprese', price: 12.00, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
      { id: 's3', name: 'Avocado Sourdough Tartine', price: 13.50, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
      { id: 's4', name: 'Smoked Salmon Rye', price: 16.00, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 's5', name: 'Roast Turkey & Brie', price: 15.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
    ]
  },
  {
    id: 'delicatteesen',
    title: 'Delicatteesen',
    products: [
      { id: 'd1', name: 'House Cultured Butter', price: 8.00, image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'd2', name: 'Marinated Kalamata Olives', price: 9.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
      { id: 'd3', name: 'Wildflower Honey Pot', price: 12.00, image: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
      { id: 'd4', name: 'Sourdough Crackers', price: 7.50, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
      { id: 'd5', name: 'Organic Fruit Jam', price: 10.00, image: 'https://images.unsplash.com/photo-1519340333755-5072120bc201?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
    ]
  },
  {
    id: 'eventos',
    title: 'Eventos',
    products: [
      { id: 'e1', name: 'Breakfast Pastry Box', price: 45.00, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'e2', name: 'Catering Sandwich Platter', price: 85.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'e3', name: 'Miniature Cake Selection', price: 60.00, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'e4', name: 'Wedding Tasting Pack', price: 25.00, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'] },
      { id: 'e5', name: 'Artisan Coffee Service', price: 35.00, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO', 'Vegan'] },
    ]
  },
  {
  id: 'queso',
    title: 'Rucula',
    products: [
      { 
        id: 'j1', 
        name: 'Classic Butter Croissant', 
        price: 4.75, 
        image: 'https://pngimg.com/d/croissant_PNG46693.png', 
        tags: ['Non-GMO'],
        description: 'Our signature 27-layer croissant, made with Isigny Ste Mère butter for an incomparable honeycomb crumb and golden, flaky crust.',
        ingredients: ['Organic Wheat Flour', 'Cultured Butter', 'Sea Salt', 'Organic Cane Sugar', 'Fresh Yeast']
      },
      { 
        id: 'j2', 
        name: 'Almond Twice-Baked', 
        price: 6.50, 
        image: 'https://danielsdonuts.com.au/wp-content/uploads/2025/02/DD_PNG_HiSylvia-15.png', 
        tags: ['Non-GMO'],
        description: 'Soaked in light rum syrup and filled with a thick layer of almond frangipane, then baked again for a nutty, caramelized crunch.',
        ingredients: ['Classic Croissant', 'California Almond Flour', 'Organic Eggs', 'Rum Syrup', 'Toasted Almond Slivers']
      },
      { 
        id: 'j3', 
        name: 'Valrhona Pain au Chocolat', 
        price: 5.75, 
        image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', 
        tags: ['Non-GMO'],
        description: 'Tucked inside our buttery dough are three bars of 70% dark Valrhona chocolate, offering a perfect balance of bitter and sweet.',
        ingredients: ['Organic Wheat Flour', 'Cultured Butter', 'Valrhona 70% Dark Chocolate', 'Sea Salt', 'Cane Sugar']
      },
      { id: 'j4', name: 'Pistachio Cream Escargot', price: 6.75, image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Spiraled pastry filled with rich pistachio pastry cream and roasted kernels.', ingredients: ['Pistachio Flour', 'Whole Milk', 'Vanilla Bean', 'Wheat Flour', 'Butter'] },
      { id: 'j5', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'j6', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'j7', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
      { id: 'j8', name: 'Ham & Gruyère Croissant', price: 8.50, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', tags: ['Non-GMO'], description: 'Savory morning favorite with house-cured ham and 12-month aged Swiss Gruyère.', ingredients: ['Cured Ham', 'Gruyère Cheese', 'Dijon Mustard', 'Buttery Pastry'] },
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    date: 'Marzo 2024',
    category: 'Seasonal',
    title: 'Nueva Colección de Primavera',
    description: 'Nuestros pasteleros han diseñado una serie de galettes usando las primeras fresas de la temporada. Disponibles solo por tiempo limitado.',
    image: 'https://images.unsplash.com/photo-1519340333755-5072120bc201?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'n2',
    date: 'Febrero 2024',
    category: 'Milestone',
    title: 'Elegida Mejor Panadería de LA',
    description: 'Gracias a vuestro apoyo, hemos sido reconocidos por la guía local como el mejor pan de masa madre del distrito de las artes.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'n3',
    date: 'Enero 2024',
    category: 'Workshops',
    title: 'Talleres de Masa Madre 101',
    description: 'Abrimos nuevas plazas para nuestros cursos presenciales. Aprende a cuidar tu "starter" y a hornear como un profesional.',
    image: 'https://images.unsplash.com/photo-1555507036-716251666084?auto=format&fit=crop&w=800&q=80'
  }
];

export const FULL_MENU = [
  {
    category: 'The Sourdough Bench',
    items: [
      { name: 'Country White', desc: 'Our signature 48-hour fermented loaf.', price: '9.50' },
      { name: 'Danish Rye', desc: 'Dense, dark, and packed with sunflower seeds.', price: '11.00' },
      { name: 'Seeded Batard', desc: 'Toasted sesame, flax, and pumpkin seeds.', price: '10.50' },
      { name: 'Olive & Rosemary', desc: 'Kalamata olives with fresh garden rosemary.', price: '11.50' },
    ]
  },
  {
    category: 'Viennoiserie',
    items: [
      { name: 'Classic Croissant', desc: 'Isigny Ste Mère butter, 27 layers.', price: '4.75' },
      { name: 'Pistachio Escargot', desc: 'Pistachio cream and roasted slivers.', price: '6.50' },
      { name: 'Seasonal Fruit Galette', desc: 'Hand-shaped with farmers market fruit.', price: '7.00' },
      { name: 'Pain Suisse', desc: 'Pastry cream and chocolate chips.', price: '6.00' },
    ]
  },
  {
    category: 'Kitchen & Coffee',
    items: [
      { name: 'Avocado Tartine', desc: 'Sourdough, lemon, chili, radish.', price: '14.00' },
      { name: 'Croque Monsieur', desc: 'House ham, gruyère, béchamel.', price: '16.00' },
      { name: 'Flat White', desc: 'Ethically sourced Brazilian beans.', price: '4.50' },
      { name: 'Hand-Whisked Matcha', desc: 'Ceremonial grade from Uji.', price: '6.50' },
    ]
  }
];

export const SECTIONS: SectionContent[] = [
  {
    title: 'The Art of Slow',
    subtitle: 'We don’t rush the dough. Each loaf takes two days to reach perfection, allowing natural enzymes to unlock deep flavor and nutrition.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    cta: 'Our Philosophy',
    link: '#',
    imagePosition: 'right'
  },
  {
    title: 'Workshops',
    subtitle: 'From starter maintenance to scoring techniques. Join us at the flour bench for our weekend masterclasses.',
    image: 'https://images.unsplash.com/photo-1555507036-716251666084?auto=format&fit=crop&w=1200&q=80',
    cta: 'View Schedule',
    link: '#',
    imagePosition: 'left'
  }
];

export const INSTAGRAM_POSTS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1589367920969-ab8e050be022?auto=format&fit=crop&w=500&q=80', caption: 'Early morning crackle.' },
  { id: 2, url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80', caption: 'Lamination goals.' },
  { id: 3, url: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=500&q=80', caption: 'Valrhona infusions.' },
  { id: 4, url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', caption: 'The perfect crumb.' },
];

export const LOCATIONS = [
  { name: 'Arts District', address: '12928 Venice Blvd, LA', phone: '(310) 439-2894' },
  { name: 'Echo Park', address: '12142 Ventura Blvd, Studio City', phone: '(747) 205-2279' },
  { name: 'Highland Park', address: '5046 York Blvd, LA', phone: '(323) 313-6381' }
];

export const MARQUEE_WORDS = ['artisanal', 'sourdough', 'pastries', 'coffee', 'community', 'artisanal', 'sourdough', 'pastries', 'coffee', 'community'];
