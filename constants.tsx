
import { Product, Collection, SectionContent, NewsItem, AboutContent } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'croissantes',
    title: 'Croissantes',
    products: [
      { 
        id: 'c1', 
        name: 'Classic Butter Croissant', 
        price: 1200, 
        image: '/images/menu/croissantes/croissant1.webp',
        hoverImage: '/images/menu/croissantes/croissant1-hover.webp',
        tags: ['Non-GMO'],
        description: 'Our signature 27-layer croissant, made with Isigny Ste Mère butter for an incomparable honeycomb crumb and golden, flaky crust.',
        ingredients: ['Organic Wheat Flour', 'Cultured Butter', 'Sea Salt', 'Organic Cane Sugar', 'Fresh Yeast']
      },
      { 
        id: 'c2', 
        name: 'Cinnamon Rol', 
        price: 1650, 
        image: '/images/menu/croissantes/cinnamonrol.webp', 
        hoverImage: '/images/menu/croissantes/cinnamonrol-hover.webp',
        tags: ['Non-GMO'],
        description: 'Soaked in light rum syrup and filled with a thick layer of almond frangipane, then baked again for a nutty, caramelized crunch.',
        ingredients: ['Classic Croissant', 'Almond Flour', 'Organic Eggs', 'Rum Syrup', 'Toasted Almond Slivers']
      },
      { 
        id: 'c3', 
        name: 'Pain Au Chocolat', 
        price: 1500, 
        image: '/images/menu/croissantes/painauchocolat.webp',
        hoverImage: '/images/menu/croissantes/painauchocolat-hover.webp', 
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
        image: '/images/menu/cakes/cake1.webp', 
        hoverImage: '/images/menu/cakes/cake1-hover.webp',
        tags: ['Non-GMO'],
        description: 'A dense, moist loaf infused with Meyer lemon zest and a generous amount of blue poppyseeds for texture.',
        ingredients: ['Organic Flour', 'Meyer Lemons', 'Blue Poppyseeds', 'Greek Yogurt', 'Extra Virgin Olive Oil']
      },
      { 
        id: 'k2', 
        name: 'Dark Chocolate Ganache', 
        price: 45.00, 
        image: '/images/menu/cakes/cake2.webp',
        hoverImage: '/images/menu/cakes/cake2-hover.webp',
        tags: ['Non-GMO', 'Vegan'],
        description: 'A rich, flourless-style cake made with cold-pressed cocoa and coconut milk, topped with a silk-smooth chocolate glaze.',
        ingredients: ['70% Cocoa', 'Coconut Milk', 'Maple Syrup', 'Almond Flour', 'Sea Salt']
      },
      { 
        id: 'k3', 
        name: 'Burnt Basque Cheesecake', 
        price: 38.00, 
        image: '/images/menu/cakes/cake3.webp', 
        hoverImage: '/images/menu/cakes/cake3-hover.webp',
        tags: ['Non-GMO'], 
        description: 'Baked at high heat to achieve a deeply caramelized top while maintaining a custardy center.', 
        ingredients: ['Cream Cheese', 'Heavy Cream', 'Organic Eggs', 'Vanilla Paste'] 
      },
      { 
        id: 'k4', 
        name: 'Wild Berry Sponge', 
        price: 14.00, 
        image: '/images/menu/cakes/cake4.webp', 
        hoverImage: '/images/menu/cakes/cake4-hover.webp',
        tags: ['Non-GMO'] 
      },
      { 
        id: 'k5', 
        name: 'Spiced Carrot Cake', 
        price: 15.50, 
        image: '/images/menu/cakes/cake5.webp', 
        hoverImage: '/images/menu/cakes/cake5-hover.webp',
        tags: ['Non-GMO'] 
      },
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
      { id: 'd1', name: 'House Cultured Butter', price: 8.00, image: '/images/menu/delicatteesen/donas.webp', hoverImage: '/images/menu/delicatteesen/donas-hover.webp', tags: ['Non-GMO'] },
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
    date: 'Enero 2026',
    category: 'Seasonal',
    title: 'Nueva Colección de Verano',
    description: 'Nuestros pasteleros han diseñado una serie de cookies usando las primeras fresas de la temporada. Disponibles solo por tiempo limitado.',
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

export const SECTIONS: SectionContent[] = [
  {
    title: 'El Arte de la Calma',
    subtitle: 'No apresuramos la masa. Cada hogaza toma dos días para alcanzar la perfección, permitiendo que las enzimas naturales desbloqueen un sabor y nutrición profundos.',
    image: 'images/menu/extra1.jpg',
    cta: 'Nuestra Filosofía',
    link: '#',
    imagePosition: 'right'
  },
  {
    title: 'Medialunas',
    subtitle: 'Medialunas de pan madre, medialunas de pan madre, medialunas de pan madre.',
    image: 'images/menu/extra2.jpg',
    cta: 'Ver Horario',
    link: '#',
    imagePosition: 'left'
  }
];

export const INSTAGRAM_POSTS = [
  { id: 1, url: '/images/instagram/fotoInstagram1.jpg', caption: 'Mini cake' },
  { id: 2, url: '/images/instagram/fotoInstagram2.jpg', caption: 'Pan Dulce' },
  { id: 3, url: '/images/instagram/fotoInstagram3.jpg', caption: 'Pannetone con Naranjas Confitadas' },
  { id: 4, url: '/images/instagram/fotoInstagram4.jpg', caption: 'Mini Bombones.' },
];

export const LOCATIONS = [
  { name: 'Villa Luro', address: 'Manzoni 30', phone: '(310) 439-2894' },
  { name: 'Plaza Irlanda', address: 'Av. Donato Alvarez 900', phone: '(747) 205-2279' },
];

export const ABOUT_CONTENT: AboutContent = {
  heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80',
  heroTitle: 'El Arte del',
  heroSubtitle: 'Amor',
  narrativeTitle: 'Harina, Agua, Sal y sobre todo, Tiempo.',
  narrativeText: [
    'En Pan&Cia, no creemos en los atajos. Cada una de nuestras hogazas es el resultado de una fermentación natural de 48 horas, permitiendo que las levaduras salvajes desbloqueen sabores y texturas que la panadería industrial ha olvidado.',
    'Lo que comenzó como un pequeño experimento en una cocina de Buenos Aires, se ha convertido en un santuario para aquellos que valoran la honestidad en su mesa.'
  ],
  narrativeImage: './images/about/foto1.jpg',
  pillars: [
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
  ]
};

export const MARQUEE_WORDS = ['artesanal', 'chipa', 'medialunas', 'toto', 'comunidad', 'artesanal', 'cookies', 'sandwiches', 'café', 'torta'];
