# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Arabic (RTL): http://localhost:3000/ar
   - English (LTR): http://localhost:3000/en

## Project Structure

```
FRONTEND/
├── app/
│   ├── [locale]/          # Locale-based routing (ar/en)
│   │   ├── layout.tsx     # Root layout with theme & i18n
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Empty file (styles in app/globals.css)
│   └── globals.css        # Global styles & theme variables
├── components/
│   ├── sections/          # Page sections
│   ├── custom-cursor.tsx  # Custom cursor component
│   ├── navigation.tsx     # Navigation bar
│   └── theme-provider.tsx # Theme context
├── i18n/                  # Internationalization
│   ├── request.ts         # i18n request config
│   └── routing.ts         # Routing configuration
├── lib/
│   └── utils.ts           # Utility functions
└── messages/              # Translation files
    ├── ar.json            # Arabic translations
    └── en.json            # English translations
```

## Key Features

✅ **Custom Cursor**: Interactive cursor with glow effects (desktop only)  
✅ **Theme Toggle**: Dark/light mode switcher  
✅ **RTL Support**: Full Arabic RTL layout  
✅ **Animations**: Framer Motion scroll animations  
✅ **Responsive**: Mobile-first design  
✅ **SEO Optimized**: Next.js 15 metadata  

## Customization

### Change Colors
Edit `app/globals.css` CSS variables and `tailwind.config.ts`

### Update Content
Modify translation files in `messages/ar.json` and `messages/en.json`

### Add Sections
Create new components in `components/sections/` and import in `app/[locale]/page.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

- **Cursor not showing**: Cursor is hidden on touch devices (mobile/tablet)
- **RTL not working**: Ensure you're accessing `/ar` route
- **Theme not persisting**: Check browser localStorage permissions

