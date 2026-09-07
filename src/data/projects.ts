// Typed content model for the Work section.
// Adding a new project = pushing one typed object here — WorkCard.astro
// and the tab/modal script both consume this shape, so a missing field
// is caught at build time (`astro check`) instead of silently breaking a card.

export type ProjectStatus = 'live' | 'in-progress';

export interface Project {
  id: string;               // stable id, used for DOM ids (tabs/panes/modal)
  name: string;
  version: string;
  stack: string[];
  status: ProjectStatus;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: 'left' | 'right';
  liveUrl?: string;
  sourceUrl?: string;
  why: {
    problem: string;
    goal: string;
    impact: string;
  };
}

export const projects: Project[] = [
  {
    id: 'ecommerce-store',
    name: 'E-Commerce Store',
    version: '2.1.0',
    stack: ['Shopify', 'Liquid', 'JS'],
    status: 'live',
    description:
      'Custom Shopify theme with dynamic filters, cart animations and mobile-first checkout flow.',
    imageSrc: '/projects/ecommerce.jpg',
    imageAlt: 'E-Commerce storefront',
    imageSide: 'right',
    liveUrl: '#',
    sourceUrl: '#',
    why: {
      problem: 'Client needed a custom store beyond default Shopify themes.',
      goal: 'Conversion-optimized storefront with brand identity.',
      impact: '40% increase in mobile conversions post-launch.'
    }
  },
  {
    id: 'restaurant-website',
    name: 'Restaurant Website',
    version: '1.3.0',
    stack: ['WordPress', 'PHP', 'CSS'],
    status: 'live',
    description:
      'Full restaurant site with online menu, reservations, and Google Maps integration.',
    imageSrc: '/projects/restaurant.jpg',
    imageAlt: 'Restaurant website',
    imageSide: 'left',
    liveUrl: '#',
    sourceUrl: '#',
    why: {
      problem: 'Restaurant had no online presence, losing customers to competitors.',
      goal: 'Modern site with reservations and menu management.',
      impact: 'Bookings moved fully online within 2 weeks of launch.'
    }
  },
  {
    id: 'islamic-app',
    name: 'Islamic App',
    version: '0.9.0',
    stack: ['React Native', 'Node', 'REST API'],
    status: 'in-progress',
    description:
      'Multilingual Islamic app with structured Arabic texts, salawat, and custom REST API backend.',
    imageSrc: '/projects/islamic-app.jpg',
    imageAlt: 'Islamic mobile app',
    imageSide: 'left',
    liveUrl: '#',
    sourceUrl: '#',
    why: {
      problem: 'No structured multilingual Islamic text resource existed as an API.',
      goal: 'Build once, serve everywhere — Arabic, Urdu, English, Persian.',
      impact: 'Personal passion project powering a live mobile app.'
    }
  }
  // 👉 add the rest of the six cards here the same way —
  // real-estate-portal, saas-dashboard, dev-portfolio, etc.
];
