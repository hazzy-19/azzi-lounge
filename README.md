# ✂️ Azzi Lounge — Barbershop & Spa

> **"More Than a Cut — It's a Vibe"**

A premium, modern website for **Azzi Lounge Barbers & Spa** — Nakuru's finest executive grooming and luxury spa destination. Built with React, Vite, and Tailwind CSS v4.

🌐 **Live Site**: [azzilounge.co.ke](https://azzilounge.co.ke)  
📍 **Location**: [Google Maps](https://www.google.com/maps/place/Azzi+Lounge+Barbers+%26+Spa/data=!4m2!3m1!1s0x0:0x3142cb27d76e55c6)

---

## 📸 Preview

A sleek, dark-themed single-page website featuring smooth animations, an auto-playing video gallery, embedded Google Maps, and direct booking via phone call and WhatsApp.

---

## ⚡ Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| **Framework**   | [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) |
| **Styling**     | [Tailwind CSS v4](https://tailwindcss.com/)     |
| **Animations**  | [Framer Motion](https://motion.dev/)            |
| **Icons**       | [Lucide React](https://lucide.dev/)             |
| **Navigation**  | [React Scroll](https://www.npmjs.com/package/react-scroll) |
| **Linting**     | [OxLint](https://oxc.rs/)                       |

---

## 🏗️ Project Structure

```
azzi-lounge/
├── public/
│   ├── images/              # Optimized .webp photos
│   │   └── services/        # Service-specific images (16 images)
│   ├── videos/              # Gallery & about section videos (7 .mp4 files)
│   └── logo.svg             # Brand logo
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Sticky navbar with smooth-scroll navigation
│   │   ├── Hero.jsx         # Full-screen hero with background image
│   │   ├── WhyChooseUs.jsx  # About section with autoplay video & trust badges
│   │   ├── Services.jsx     # Tabbed service categories with image cards
│   │   ├── LocationMap.jsx  # Embedded Google Maps + business info
│   │   ├── Gallery.jsx      # Masonry media gallery (photos + videos)
│   │   ├── VideoPreview.jsx # IntersectionObserver-based video autoplay
│   │   ├── Reviews.jsx      # Google reviews carousel
│   │   ├── Footer.jsx       # Footer with links & social media
│   │   └── FloatingActions.jsx # Floating phone & WhatsApp CTAs
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind imports
├── index.html               # HTML shell with SEO meta tags & structured data
├── vite.config.js           # Vite configuration
├── package.json
└── .gitignore
```

---

## 🎨 Design System

The site uses a custom dark luxury palette defined via Tailwind's `@theme`:

| Token          | Value       | Usage                        |
|----------------|-------------|------------------------------|
| `--color-midnight`   | `#090D14`   | Primary background           |
| `--color-deep-navy`  | `#0F1520`   | Card/section backgrounds     |
| `--color-royal-blue` | `#1E3A8A`   | Accent, borders, glows       |
| `--color-ice-blue`   | `#E8F0FE`   | Primary text                 |
| `--color-soft-gold`  | `#F59E0B`   | Highlights (stars, badges)   |

**Typography**: Playfair Display (headings) + Inter (body) via Google Fonts.

---

## 🎬 Video Architecture

The gallery uses a **performance-first video system** instead of loading all videos at once:

- **`VideoPreview.jsx`** uses `IntersectionObserver` (50% threshold) to detect when a video enters the viewport.
- **Single-instance playback**: Only one video plays at a time across the entire gallery. When a new video scrolls into view, the previous one pauses.
- **`preload="metadata"`**: Videos load only their first frame and dimensions on page load — no eager byte downloads.
- **Standalone mode**: The about section video manages its own play state independently via local React state.

---

## 📱 Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Smooth Scroll Navigation** — Single-page app with section-based smooth scrolling
- **Masonry Photo + Video Gallery** — 2–4 column adaptive layout with lightbox
- **Auto-playing Video Previews** — Pinterest/TikTok-style silent video previews
- **Direct Booking** — Phone call trigger and WhatsApp deep links with pre-filled messages
- **Service Categories** — Tabbed interface: Barbering, Facials, Massage, Nails, Packages
- **Google Reviews** — Real customer testimonials carousel
- **Embedded Google Maps** — Interactive map with exact business location
- **Social Media Links** — Instagram & TikTok integration
- **Floating Action Buttons** — Always-visible phone & WhatsApp CTAs
- **SEO Optimized** — Meta tags, Open Graph, structured data (JSON-LD), semantic HTML
- **Framer Motion Animations** — Scroll-triggered reveals and micro-interactions

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hazzy-19/azzi-lounge.git
cd azzi-lounge

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📋 Available Scripts

| Script          | Command           | Description                        |
|-----------------|-------------------|------------------------------------|
| `npm run dev`   | `vite`            | Start development server with HMR  |
| `npm run build` | `vite build`      | Create optimized production bundle |
| `npm run preview` | `vite preview`  | Preview the production build locally |
| `npm run lint`  | `oxlint`          | Run fast linting with OxLint       |

---

## 📞 Business Contact

- **Phone**: [+254 700 051 405](tel:+254700051405)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/254700051405)
- **Instagram**: [@azzilounge_barbers_spa1](https://www.instagram.com/azzilounge_barbers_spa1/)
- **TikTok**: [@azziloungebarbers](https://www.tiktok.com/@azziloungebarbers)
- **Location**: Nakuru, Kenya — [Get Directions](https://www.google.com/maps/place/Azzi+Lounge+Barbers+%26+Spa/data=!4m2!3m1!1s0x0:0x3142cb27d76e55c6)

---

## 📄 License

This project is proprietary. All rights reserved by Azzi Lounge Barbers & Spa.
