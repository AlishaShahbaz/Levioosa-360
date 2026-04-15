export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  modelUrl?: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aether Runner X1',
    price: 850,
    category: 'Footwear',
    description: 'The pinnacle of futuristic footwear. Engineered with liquid-glass polymers and adaptive suspension.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    modelUrl: '/models/shoe.glb', // Placeholder for 3D model
    colors: ['#00ff9d', '#ffffff', '#000000'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    featured: true
  },
  {
    id: '2',
    name: 'Nebula Shell Jacket',
    price: 1200,
    category: 'Outerwear',
    description: 'A light-reactive outer shell that shifts between iridescent hues based on ambient light.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    colors: ['#bc13fe', '#00d2ff'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true
  },
  {
    id: '3',
    name: 'Void Chronograph',
    price: 2400,
    category: 'Accessories',
    description: 'A timepiece carved from a single block of obsidian glass with a floating holographic display.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    colors: ['#000000'],
    sizes: ['One Size'],
    featured: false
  },
  {
    id: '4',
    name: 'Onyx Stealth Pack',
    price: 450,
    category: 'Accessories',
    description: 'Minimalist carry system with magnetic closures and water-resistant glass-weave fabric.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    colors: ['#000000', '#333333'],
    sizes: ['One Size'],
    featured: false
  },
  {
    id: '5',
    name: 'Prism Tech Tee',
    price: 220,
    category: 'Apparel',
    description: 'Ultra-breathable tech fabric with reflective geometric patterns.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    colors: ['#ffffff', '#00d2ff'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true
  },
  {
    id: '6',
    name: 'Cyber Knit Trousers',
    price: 580,
    category: 'Apparel',
    description: 'Ergonomic fit with integrated compression zones and liquid-repellent coating.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    colors: ['#000000', '#111111'],
    sizes: ['28', '30', '32', '34', '36'],
    featured: false
  }
];
