# Md Kawsar Ali - Portfolio Website

A modern, high-performance portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## 🚀 Features

- **Modern Design**: Clean, dark theme with accent colors
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Responsive**: Fully responsive on mobile, tablet, and desktop
- **Performance Optimized**: HTML5 Canvas support, optimized images, smooth scroll
- **Interactive**: Hover effects, smooth transitions, and engaging interactions
- **SEO Ready**: Proper meta tags and semantic HTML
- **Dark Mode**: Beautiful dark theme optimized for reduced eye strain

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis

## 📋 Sections

1. **Navbar**: Fixed navigation with logo and mobile menu
2. **Hero**: Eye-catching hero section with CTA buttons
3. **About**: Introduction and professional background
4. **Projects**: Showcase of 4 featured projects (customizable)
5. **Skills**: Technical skills organized by category
6. **Contact**: Contact information and social links
7. **Footer**: Footer with quick links and social media

## 🎨 Customization Guide

### Update Personal Information

- Edit the name, description, and social links in components
- Update email and GitHub/LinkedIn links in Contact section

### Modify Colors

- Primary accent color: Change `#0ea5e9` (cyan) in `tailwind.config.js`
- Background colors: Modify dark theme colors in tailwind config

### Update Images

- Replace `/public/myimage.jpg` with your photo
- Replace `/public/logo.svg` with your logo

### Add Projects

- Edit the `projects` array in `components/sections/Projects.tsx`
- Add your project details, tech stack, and links

### Update Skills

- Modify `skillCategories` in `components/sections/Skills.tsx`
- Add or remove skill categories and individual skills

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to project directory:

```bash
cd Portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 File Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects section
│       ├── Skills.tsx      # Skills section
│       └── Contact.tsx     # Contact section
├── public/
│   ├── myimage.jpg         # Your profile image
│   └── logo.svg            # Your logo
├── lib/                    # Utility functions
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config
└── next.config.js          # Next.js config
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` if needed for any API endpoints:

```
NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind Config

Customize colors, fonts, and animations in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎯 Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified and purged of unused styles
- JavaScript is code-split for faster load times
- Animations use GPU acceleration for smooth performance

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Md Kawsar Ali**

- Full Stack Developer
- CSE Graduate
- Tech Stack: MERN, Next.js, GSAP, Framer Motion, PHP, Laravel

## 🙋 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!
