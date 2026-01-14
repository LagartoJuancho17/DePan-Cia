
import { Product, Collection, SectionContent, NewsItem, AboutContent } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'croissantes',
    title: 'Croissantes',
    products: [
      { 
        id: 'c1', 
        name: 'Croissant de Mantequilla', 
        price: 1200, 
        image: '/images/menu/croissantes/croissant1.webp',
        hoverImage: '/images/menu/croissantes/croissant1-hover.webp',
        tags: ['Non-GMO'],
        description: 'Nuestro croissant insignia de 27 capas, hecho con mantequilla Isigny Ste Mère para una miga incomparable y una corteza dorada y crujiente.',
        ingredients: ['Harina de Trigo Orgánica', 'Mantequilla Cultivada', 'Sal Marina', 'Azúcar de Caña Orgánica', 'Levadura Fresca']
      },
      { 
        id: 'c2', 
        name: 'Rol de Canela', 
        price: 1650, 
        image: '/images/menu/croissantes/cinnamonrol.webp', 
        hoverImage: '/images/menu/croissantes/cinnamonrol-hover.webp',
        tags: ['Non-GMO'],
        description: 'Bañado en un ligero almíbar de ron y relleno con una capa gruesa de frangipane de almendras, horneado dos veces para un crujido caramelizado.',
        ingredients: ['Croissant Clásico', 'Harina de Almendras', 'Huevos Orgánicos', 'Almíbar de Ron', 'Laminas de Almendra Tostada']
      },
      { 
        id: 'c3', 
        name: 'Pain Au Chocolat', 
        price: 1500, 
        image: '/images/menu/croissantes/painauchocolat.webp',
        hoverImage: '/images/menu/croissantes/painauchocolat-hover.webp', 
        tags: ['Non-GMO'],
        description: 'Dentro de nuestra masa mantecosa se esconden tres barras de chocolate negro Valrhona al 70%, ofreciendo un equilibrio perfecto entre amargo y dulce.',
        ingredients: ['Harina de Trigo Orgánica', 'Mantequilla Cultivada', 'Chocolate Negro Valrhona 70%', 'Sal Marina', 'Azúcar de Caña']
      },
      { 
        id: 'c4', 
        name: 'Caracola de Pistacho', 
        price: 675, 
        image: '/images/menu/croissantes/croissant1.webp',
        hoverImage: '/images/menu/croissantes/croissant1-hover.webp',
        tags: ['Non-GMO'],
        description: 'Masa en espiral rellena con rica crema pastelera de pistacho y granos tostados.',
        ingredients: ['Harina de Pistacho', 'Leche Entera', 'Vaina de Vainilla', 'Harina de Trigo', 'Mantequilla']
      },
    ]
  },
  {
    id: 'cakes',
    title: 'Cakes',
    products: [
      { 
        id: 'k1', 
        name: 'Budín de Limón y Amapola', 
        price: 12.00, 
        image: '/images/menu/cakes/cake1.webp', 
        hoverImage: '/images/menu/cakes/cake1-hover.webp',
        tags: ['Non-GMO'],
        description: 'Un budín denso y húmedo infusionado con ralladura de limón Meyer y una generosa cantidad de semillas de amapola azul para texturizar.',
        ingredients: ['Harina Orgánica', 'Limones Meyer', 'Semillas de Amapola Azul', 'Yogur Griego', 'Aceite de Oliva Virgen Extra']
      },
      { 
        id: 'k2', 
        name: 'Ganache de Chocolate Negro', 
        price: 45.00, 
        image: '/images/menu/cakes/cake2.webp',
        hoverImage: '/images/menu/cakes/cake2-hover.webp',
        tags: ['Non-GMO', 'Vegano'],
        description: 'Un rico pastel estilo sin harina hecho con cacao prensado en frío y leche de coco, cubierto con un glaseado de chocolate suave como la seda.',
        ingredients: ['70% Cacao', 'Leche de Coco', 'Jarabe de Arce', 'Harina de Almendras', 'Sal Marina']
      },
      { 
        id: 'k3', 
        name: 'Cheesecake Vasco', 
        price: 38.00, 
        image: '/images/menu/cakes/cake3.webp', 
        hoverImage: '/images/menu/cakes/cake3-hover.webp',
        tags: ['Non-GMO'], 
        description: 'Horneado a alta temperatura para lograr una superficie profundamente caramelizada manteniendo un centro cremoso.', 
        ingredients: ['Queso Crema', 'Crema Espesa', 'Huevos Orgánicos', 'Pasta de Vainilla'] 
      },
      { 
        id: 'k4', 
        name: 'Bizcocho de Frutos Rojos', 
        price: 14.00, 
        image: '/images/menu/cakes/cake4.webp', 
        hoverImage: '/images/menu/cakes/cake4-hover.webp',
        tags: ['Non-GMO'] 
      },
      { 
        id: 'k5', 
        name: 'Pastel de Zanahoria', 
        price: 15.50, 
        image: '/images/menu/cakes/cake5.webp', 
        hoverImage: '/images/menu/cakes/cake5-hover.webp',
        tags: ['Non-GMO'] 
      },
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies',
    products: [
      { 
        id: 'co1', 
        name: 'Galleta con Trozos de Chocolate', 
        price: 4.50, 
        image: '/images/menu/cookies/cookie1.webp', 
        hoverImage: '/images/menu/cookies/cookie1-hover.webp', 
        tags: ['Non-GMO'],
        description: 'Galleta clásica con trozos de chocolate semidulce.',
        ingredients: ['Harina', 'Mantequilla', 'Chocolate', 'Azúcar', 'Huevos']
      },
      { 
        id: 'co2', 
        name: 'Galleta de Avena y Pasas', 
        price: 4.00, 
        image: '/images/menu/cookies/cookie2.webp', 
        hoverImage: '/images/menu/cookies/cookie2-hover.webp', 
        tags: ['Non-GMO'], 
        description: 'Galleta de avena con pasas, suave y masticable.',
        ingredients: ['Avena', 'Pasas', 'Mantequilla', 'Harina', 'Canela'] 
      },
      { 
        id: 'co3', 
        name: 'Galleta de Doble Chocolate', 
        price: 4.75, 
        image: '/images/menu/cookies/cookie3.webp', 
        hoverImage: '/images/menu/cookies/cookie3-hover.webp', 
        tags: ['Non-GMO'], 
        description: 'Doble chocolate para los amantes del cacao.',
        ingredients: ['Cacao', 'Chocolate', 'Mantequilla', 'Azúcar', 'Harina'] 
      },
      { 
        id: 'co4', 
        name: 'Chocolate Blanco y Macadamia', 
        price: 5.00, 
        image: '/images/menu/cookies/cookie4.webp', 
        hoverImage: '/images/menu/cookies/cookie4-hover.webp', 
        tags: ['Non-GMO'], 
        description: 'Chocolate blanco cremoso con nueces de macadamia crujientes.',
        ingredients: ['Chocolate Blanco', 'Nueces de Macadamia', 'Mantequilla', 'Azúcar', 'Harina'] 
      },
      { 
        id: 'co5', 
        name: 'Galleta de Mantequilla de Maní', 
        price: 4.25, 
        image: '/images/menu/cookies/cookie5.webp', 
        hoverImage: '/images/menu/cookies/cookie5-hover.webp', 
        tags: ['Non-GMO'], 
        description: 'Rica y mantecosa galleta de mantequilla de maní.',
        ingredients: ['Mantequilla de Maní', 'Mantequilla', 'Azúcar Morena', 'Harina', 'Huevos'] 
      },
    ]
  },
  {
    id: 'macarons',
    title: 'Macarons',
    products: [
      {
        id: 'macaron-1',
        name: 'Frambuesa Clásica',
        price: 3.50,
        image: '/images/menu/macaron/macaron1.webp',
        hoverImage: '/images/menu/macaron/macaron1-hover.webp',
        description: 'Delicadas conchas de almendra rellenas con ganache de frambuesa fresca.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Frambuesas', 'Chocolate Blanco'],
        tags: ['SIN GLUTEN', 'FRUTAL'],
        hidden: false
      },
      {
        id: 'macaron-2',
        name: 'Sueño de Pistacho',
        price: 3.50,
        image: '/images/menu/macaron/macaron2.webp',
        hoverImage: '/images/menu/macaron/macaron2-hover.webp',
        description: 'Rica crema de mantequilla de pistacho entre ligeras conchas verdes.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Pistachos', 'Mantequilla'],
        tags: ['SIN GLUTEN', 'NUECES'],
        hidden: false
      },
      {
        id: 'macaron-3',
        name: 'Caramelo Salado',
        price: 3.50,
        image: '/images/menu/macaron/macaron3.webp',
        hoverImage: '/images/menu/macaron/macaron3-hover.webp',
        description: 'Relleno de caramelo dulce y salado en una concha dorada.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Crema', 'Sal Marina'],
        tags: ['SIN GLUTEN', 'DULCE'],
        hidden: false
      },
      {
        id: 'macaron-4',
        name: 'Chocolate Negro',
        price: 3.50,
        image: '/images/menu/macaron/macaron4.webp',
        hoverImage: '/images/menu/macaron/macaron4-hover.webp',
        description: 'Intenso ganache de chocolate negro 70% para los verdaderos amantes del chocolate.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Chocolate Negro', 'Cacao en Polvo'],
        tags: ['SIN GLUTEN', 'CHOCOLATE'],
        hidden: false
      },
      {
        id: 'macaron-5',
        name: 'Ralladura de Limón',
        price: 3.50,
        image: '/images/menu/macaron/macaron5.webp',
        hoverImage: '/images/menu/macaron/macaron5-hover.webp',
        description: 'Relleno de crema de limón brillante y ácida.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Jugo de Limón', 'Mantequilla'],
        tags: ['SIN GLUTEN', 'CÍTRICO'],
        hidden: false
      },
      {
        id: 'macaron-6',
        name: 'Vaina de Vainilla',
        price: 3.50,
        image: '/images/menu/macaron/macaron6.webp',
        hoverImage: '/images/menu/macaron/macaron6-hover.webp',
        description: 'Clásica crema de mantequilla de vainilla hecha con vainilla de Madagascar.',
        ingredients: ['Harina de Almendras', 'Azúcar', 'Claras de Huevo', 'Vaina de Vainilla', 'Mantequilla'],
        tags: ['SIN GLUTEN', 'CLÁSICO'],
        hidden: false
      }
    ]
  },
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
    image: '/images/menu/extra1.jpg',
    cta: 'Nuestra Filosofía',
    link: '#',
    imagePosition: 'right'
  },
  {
    title: 'Medialunas',
    subtitle: 'Medialunas de pan madre, medialunas de pan madre, medialunas de pan madre.',
    image: '/images/menu/extra2.jpg',
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
  { name: 'Villa Luro', address: 'Manzoni 30', phone: '(310) 439-2894', mapUrl: 'https://maps.app.goo.gl/rkqGnUa7outH3wkr9' },
  { name: 'Plaza Irlanda', address: 'Av. Donato Alvarez 900', phone: '(747) 205-2279', mapUrl: 'https://maps.app.goo.gl/3Jy8CANzUQbQn9CR7' },
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
  narrativeImage: '/images/about/foto1.jpg',
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
