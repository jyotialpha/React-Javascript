# 🚀 Modern Portfolio Website

A beautiful, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Showcase your skills, projects, and experience with smooth animations and a clean, professional design.

## ✨ Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **SEO Optimized** - Meta tags and proper HTML structure for better search visibility
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Modern UI** - Clean design with gradient accents and glassmorphism effects

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar with theme toggle
│   ├── Hero.jsx           # Home/Landing section
│   ├── About.jsx          # About me section
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills with progress bars
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer with social links
├── context/
│   └── ThemeContext.jsx   # Dark mode context provider
├── App.jsx                # Main app component
├── index.jsx              # App entry point
└── index.css              # Global styles and Tailwind config
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service for contact form
- **React Icons** - Icon library

## 🚀 Getting Started

1. **Click the Run button** to start the development server
2. The portfolio will open automatically in the preview pane
3. **Customize the content** with your own information (see below)

## ✏️ Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Replace "Your Name" with your actual name
- Update the introduction text
- Modify button text/links as needed

**About Section** (`src/components/About.jsx`):
- Replace the placeholder photo (update the gradient div with an actual image)
- Update your background and experience text
- Modify the experience cards with your own achievements

**Contact Section** (`src/components/Contact.jsx`):
- Update email, phone, and location
- **Important**: Set up EmailJS:
  1. Sign up at [EmailJS.com](https://www.emailjs.com/)
  2. Create a service and template
  3. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`

**Footer** (`src/components/Footer.jsx`):
- Update social media links (GitHub, LinkedIn, Twitter, Email)
- Modify quick links as needed
- Update copyright name

### 2. Add Your Projects

Edit `src/components/Projects.jsx`:
- Replace the sample projects array with your own projects
- Update title, description, image, tags, GitHub, and demo links
- Add or remove projects as needed

### 3. Update Skills

Edit `src/components/Skills.jsx`:
- Modify the skills arrays with your own skills
- Adjust skill levels (percentage)
- Add or remove skill categories

### 4. Customize Colors

Edit `tailwind.config.js`:
- Change the primary color palette
- Add custom colors for your brand
- Modify animations and effects

### 5. Update SEO

Edit `index.html`:
- Update title, description, and keywords
- Change author name
- Update Open Graph and Twitter Card meta tags
- Replace `/og-image.jpg` with your own preview image

## 📧 Setting Up EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Update them in `src/components/Contact.jsx`

## 🎨 Customizing Colors & Design

The portfolio uses a gradient color scheme from primary blue to purple. To change:

1. Update `tailwind.config.js` with your color palette
2. Modify gradient classes in components (e.g., `from-primary-600 to-purple-600`)
3. Adjust dark mode colors if needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's dark mode class strategy:
- Toggle between light/dark themes
- Persists in localStorage
- Respects system preferences on first visit

## 🚢 Deployment

Ready to publish your portfolio? Click the **Publish** button in Replit to deploy your site with a live URL!

## 📝 License

Feel free to use this template for your personal portfolio. Customize it to make it your own!

## 💡 Tips

- Use high-quality images for projects and your profile photo
- Keep project descriptions concise and impactful
- Update your portfolio regularly with new projects
- Test on different devices to ensure responsiveness
- Optimize images for faster loading

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**