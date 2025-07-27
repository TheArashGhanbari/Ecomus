# Ecomus - Modern E-commerce Platform

A comprehensive e-commerce website built with Next.js 15, featuring modern UI components, responsive design, and advanced shopping features.

## Overview

Ecomus is a full-featured e-commerce platform that provides:

- Product browsing and search functionality
- Category-based product organization
- Interactive product details and reviews
- Shopping cart and checkout process
- User authentication and account management
- Multi-language and multi-currency support
- Responsive design for all devices

## Features

- **Product Management**: Browse products by categories with detailed product pages
- **Interactive UI**: Modern components built with Radix UI and Framer Motion
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Brand Showcase**: Featured brand slider with major fashion brands
- **Testimonials**: Customer review carousel with ratings
- **Interactive Map**: Location-based services integration
- **Premium Support**: Customer service integration
- **Newsletter**: Email subscription functionality
- **Multi-language**: Internationalization support
- **Currency Selection**: Multi-currency support for global customers

## Technical Stack

- **Framework**: Next.js 15.4.3 (App Router)
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Maps**: React Leaflet
- **Sliders**: Keen Slider & Swiper
- **Notifications**: Sonner toast notifications
- **Development**: ESLint & TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd Websites/ecomus
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── category/[name]/    # Dynamic category pages
│   ├── product/[id]/       # Dynamic product pages
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components (Radix)
│   ├── BrandSlider.jsx     # Brand showcase
│   ├── CurrencySelector.jsx # Currency selection
│   ├── Footer.jsx          # Site footer
│   ├── Header.jsx          # Site header
│   ├── LanguageSelector.jsx # Language selection
│   ├── Map.jsx             # Interactive map
│   ├── NewsLetterForm.jsx  # Newsletter signup
│   ├── PremiumSupport.jsx  # Customer support
│   ├── ProductCart.jsx     # Shopping cart
│   ├── TestimonialSlider.jsx # Customer reviews
│   └── subtitile.jsx       # Marquee text
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── brands/             # Brand logos
└── styles/                 # Global styles
```

## Key Components

### UI Components

- **Accordion**: Collapsible content sections
- **Avatar**: User profile images
- **Button**: Interactive buttons with variants
- **Card**: Product and content cards
- **Dialog**: Modal windows
- **Dropdown**: Context menus
- **Input**: Form inputs with validation
- **Select**: Dropdown selections
- **Switch**: Toggle controls
- **Tabs**: Tabbed content navigation
- **Tooltip**: Hover information displays

### Features

- **Brand Slider**: Showcase featured brands
- **Testimonial Carousel**: Customer reviews and ratings
- **Interactive Map**: Location services
- **Newsletter Form**: Email subscription
- **Premium Support**: Customer service integration
- **Multi-language Support**: Internationalization
- **Currency Selection**: Global payment support

## Styling

The project uses Tailwind CSS 4.0 with:

- Custom color schemes
- Responsive design patterns
- Dark/light theme support
- Animation utilities
- Custom component variants

## Development

### Code Quality

- ESLint configuration for code quality
- TypeScript support for type safety
- Prettier for code formatting
- Husky for git hooks

### Performance

- Next.js App Router for optimal routing
- Image optimization with Next.js
- Code splitting and lazy loading
- SEO optimization

## Deployment

The application can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## Contributing

This is a modern e-commerce platform demonstrating:

- Next.js 15 App Router
- Modern React patterns
- Component-driven development
- Responsive design principles
- E-commerce best practices

## License

This project is for educational and commercial purposes.
