# Portfolio Website Project

## Overview
A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. The site showcases skills, projects, and experience with smooth animations and a professional design.

## Project Status
✅ Complete - Fully functional portfolio website with all requested features

## Key Features
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode toggle with localStorage persistence
- Smooth scrolling and animations (Framer Motion)
- Contact form with EmailJS integration
- SEO-optimized with meta tags
- Clean, reusable component architecture

## Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Contact**: EmailJS
- **Build Tool**: Vite

## Project Structure
```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Hero.jsx        # Landing/Home section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills with progress bars
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with social links
├── context/
│   └── ThemeContext.jsx # Dark mode state management
├── App.jsx             # Main app component
├── index.jsx           # Entry point
└── index.css           # Tailwind base styles
```

## Configuration Files
- `tailwind.config.js` - Tailwind configuration with custom colors and dark mode
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite dev server config (port 5000, HMR setup)
- `index.html` - SEO meta tags

## Sections
1. **Home/Hero** - Name, title, intro, CTA buttons
2. **About** - Photo, background, experience highlights
3. **Projects** - 6 sample projects with images, tags, GitHub/demo links
4. **Skills** - Frontend, Backend, Database & Tools with progress bars
5. **Contact** - Contact form with EmailJS integration
6. **Footer** - Social links, quick navigation, copyright

## Customization Needed
User needs to update with their own data:
- [ ] Personal information (name, title, intro)
- [ ] Profile photo in About section
- [ ] Real projects (replace sample data)
- [ ] Actual skills and levels
- [ ] EmailJS credentials (Service ID, Template ID, Public Key)
- [ ] Social media links
- [ ] Contact information (email, phone, location)

## EmailJS Setup
The contact form uses EmailJS. User needs to:
1. Sign up at emailjs.com
2. Create email service and template
3. Update credentials in `src/components/Contact.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## Development
- **Run**: `npm run dev` (already configured in workflow)
- **Port**: 5000 (configured for Replit)
- **Hot Reload**: Enabled with HMR

## Design System
- **Primary Colors**: Blue to Purple gradient (`#0ea5e9` to `#a855f7`)
- **Dark Mode**: Tailwind class-based dark mode
- **Animations**: Framer Motion with fade-in, slide-in effects
- **Typography**: Clean, modern sans-serif
- **Layout**: Max-width containers, responsive grid/flex

## Code Quality
- Clean, well-commented components
- Reusable utility classes in Tailwind
- Consistent naming conventions
- Mobile-first responsive design
- Accessible navigation and forms

## Recent Changes (Oct 14, 2025)
- Created complete portfolio website from scratch
- Installed and configured Tailwind CSS
- Implemented all 6 sections (Home, About, Projects, Skills, Contact, Footer)
- Added dark mode with theme persistence
- Integrated Framer Motion animations
- Set up EmailJS for contact form
- Added SEO meta tags
- Created custom favicon
- Configured Vite for Replit environment

## Notes
- All sample content is placeholder data for demonstration
- User should replace with their actual information
- Images use Unsplash for project screenshots (replace with real images)
- Contact form requires EmailJS setup to work
- Dark mode persists in localStorage
- Portfolio is fully responsive and tested
