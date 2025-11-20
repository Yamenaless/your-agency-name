# Arabic Digital Marketing Agency Website

A modern, professional Arabic digital marketing agency website built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- ✨ **Modern Design**: Clean, professional design with dark/light theme toggle
- 🌍 **RTL Support**: Full Right-to-Left support for Arabic content using next-intl
- 📱 **Responsive**: Mobile-first responsive design
- 🎨 **Animations**: Smooth scroll animations using Framer Motion
- 🖱️ **Custom Cursor**: Interactive custom cursor with glow/blur effects
- 🎯 **Sections**: Hero, About, Services, Why Choose Us, Testimonials, and Footer
- ⚡ **Performance**: Optimized with Next.js Image, lazy loading, and code splitting
- ♿ **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Framer Motion** - Animation library
- **next-intl** - Internationalization for RTL/Arabic support
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will default to Arabic (RTL) at `/ar`. English (LTR) is available at `/en`.

## Project Structure

```
├── app/
│   └── [locale]/
│       ├── layout.tsx      # Root layout with theme provider
│       ├── page.tsx         # Home page
│       └── globals.css      # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── testimonials.tsx
│   │   └── footer.tsx
│   ├── custom-cursor.tsx   # Custom cursor component
│   ├── navigation.tsx      # Navigation bar
│   └── theme-provider.tsx  # Theme context provider
├── i18n/                   # Internationalization config
├── lib/
│   └── utils.ts           # Utility functions
└── messages/               # Translation files
    ├── ar.json            # Arabic translations
    └── en.json            # English translations
```

## Features Breakdown

### Custom Cursor
- Follows mouse movement with smooth spring animation
- Glow/blur effects
- Grows on hover over interactive elements
- Hidden on mobile devices

### Animations
- Fade in/up on scroll
- Stagger animations for lists
- Hover scale effects on cards
- Smooth page transitions
- Number counter animations

### Sections

1. **Hero Section**: Full-screen with animated headline, CTA buttons, and particle effects
2. **About Section**: Company introduction with mission, vision, and values cards
3. **Services Section**: Grid layout of service cards with hover effects
4. **Why Choose Us**: Feature highlights with animated counters
5. **Testimonials**: Carousel with auto-play and manual controls
6. **Footer**: Contact information, social links, and newsletter signup

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts` and `app/globals.css`.

### Content
Update translations in `messages/ar.json` and `messages/en.json`.

### Sections
Modify components in `components/sections/` to customize each section.

## Build

```bash
npm run build
```

## License

This project is open source and available under the MIT License.

