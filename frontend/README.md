# Sanjeev Kumar - Cybersecurity Portfolio

A modern, responsive portfolio showcasing cybersecurity expertise, incident response projects, and technical skills.

## 🚀 Features

- **Career Timeline** - Chronological journey from education to professional experience
- **Incident Response & Writeups** - Detailed security projects and case studies
- **Technical Arsenal** - Comprehensive skill showcase across 8 categories
- **Contact Cards** - Easy ways to connect (LinkedIn, GitHub, TryHackMe, Email)
- **Responsive Design** - Works perfectly on all devices
- **Dark Theme** - Professional cybersecurity aesthetic
- **Smooth Animations** - Engaging scroll-triggered effects

## 🛠️ Tech Stack

- **React 19** - Modern UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Beautiful component library
- **Lucide Icons** - Clean, modern icons

## 📦 Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 🌐 Deployment

This is a **frontend-only** application with no backend dependencies. Deploy to:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect your GitHub repository
2. Build command: `yarn build`
3. Publish directory: `build`

### GitHub Pages
1. Update `package.json`: Add `"homepage": "https://yourusername.github.io/portfolio"`
2. Build: `yarn build`
3. Deploy using gh-pages package

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Main landing page
│   └── ProjectDetail.jsx     # Project writeup page
├── components/ui/            # Shadcn UI components
├── mock.js                   # All portfolio data (EDIT THIS!)
├── App.js                    # Routes configuration
├── App.css                   # Custom animations
└── index.css                 # Global styles + Tailwind
```

## ✏️ Customization

### Update Personal Information
Edit `src/mock.js`:
- `studentInfo` - Name, title, bio, contact links
- `experiences` - Work history and internships
- `projects` - Incident response cases and writeups

### Modify Colors
Update Tailwind theme in `tailwind.config.js` or CSS variables in `index.css`

## 🎨 Design Features

- **Color Scheme**: Dark blue/slate with cyan, orange, and purple accents
- **Typography**: Ultra-light fonts for modern professional look
- **Animations**: Scroll-triggered reveals, parallax, hover effects
- **Accessibility**: Semantic HTML, keyboard navigation

## 📝 License

Personal portfolio - All rights reserved © 2024 Sanjeev Kumar

## 🤝 Connect

- **LinkedIn**: [sanjeev-kumar-270b6321a](https://www.linkedin.com/in/sanjeev-kumar-270b6321a/)
- **GitHub**: [s-anjeev](https://github.com/s-anjeev)
- **TryHackMe**: [sanjeevkumar25857](https://tryhackme.com/p/sanjeevkumar25857) - **Top 1%**
- **Email**: sanjeevkumar25857@gmail.com
