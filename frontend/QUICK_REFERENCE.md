# 📋 Quick Reference Guide

> **TL;DR** - Quick commands and content update guide

## ⚡ Quick Start

```bash
# Install dependencies
yarn install

# Run locally
yarn start

# Build for production
yarn build

# Deploy to Vercel
vercel --prod
```

---

## 📝 Quick Content Updates

### Update Personal Info
**File:** `src/mock.js` (Lines 1-11)

```javascript
export const studentInfo = {
  name: "Your Name",
  email: "your@email.com",
  // ... update other fields
};
```

### Add New Experience
**File:** `src/mock.js` (Lines 13-28)

```javascript
export const experiences = [
  {
    id: 3,  // New ID
    year: "2023-24",
    role: "Your Role",
    company: "Company Name",
    description: "What you did..."
  },
  // ... existing experiences
];
```

### Add New Writeup (Simple Format)
**File:** `src/mock.js` (Add to projects array)

```javascript
{
  id: 7,  // New ID
  title: "Your Incident Title",
  category: "Incident Response",
  thumbnail: "https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop",
  summary: "Brief summary",
  date: "January 2025",
  severity: "High",
  detailedReport: {
    executiveSummary: "Overview...",
    timeline: [
      { time: "10:00 AM", event: "Detection", status: "detected" }
    ],
    findings: [
      { title: "Finding", description: "Details", severity: "high", evidence: "Evidence" }
    ],
    recommendations: ["Recommendation 1", "Recommendation 2"],
    toolsUsed: ["Tool1", "Tool2"]
  }
}
```

### Add New Tool
**File:** `src/mock.js` (Lines 416-489)

```javascript
{
  id: 9,
  name: "Tool Name",
  category: "Category",
  description: "Brief description",
  usage: "How you used it",
  findings: "What you found",
  icon: "Shield"  // Lucide icon name
}
```

---

## 🎨 Common Customizations

### Change Thumbnail Images

Get free images from:
- **Unsplash**: https://unsplash.com/s/photos/cybersecurity
- **Format**: `https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop`

### Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  blue: { 500: '#your-color', 600: '#your-color', ... },
  cyan: { 400: '#your-color', 500: '#your-color', ... }
}
```

### Update Resume Link

**File:** `src/mock.js`

```javascript
resumeUrl: "https://your-cloud-storage.com/resume.pdf"
```

**Upload Options:**
- Google Drive (make link public)
- Dropbox (create public link)
- AWS S3 / Cloudflare R2
- GitHub Releases

---

## 🚀 Deployment Cheat Sheet

### Vercel (Recommended)

```bash
# First time
vercel

# Production
vercel --prod

# Check deployment
vercel ls
```

### Netlify

```bash
# Build first
yarn build

# Deploy
netlify deploy --prod --dir=build
```

### GitHub Pages

```bash
# Install gh-pages
yarn add -D gh-pages

# Add to package.json scripts:
"predeploy": "yarn build",
"deploy": "gh-pages -d build"

# Deploy
yarn deploy
```

---

## 🔧 Troubleshooting Quick Fixes

| Issue | Fix |
|-------|-----|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` |
| Changes not showing | Clear cache: `rm -rf node_modules && yarn install` |
| Build fails | Increase memory: `NODE_OPTIONS=--max_old_space_size=4096 yarn build` |
| Images not loading | Use full URLs, not relative paths |

---

## 📁 File Locations

| What to Update | File Location |
|----------------|---------------|
| **All content** | `src/mock.js` |
| Personal info | `src/mock.js` (Lines 1-11) |
| Experiences | `src/mock.js` (Lines 13-28) |
| Writeups | `src/mock.js` (Lines 30-414) |
| Tools | `src/mock.js` (Lines 416-489) |
| Colors | `tailwind.config.js` |
| Layout | `src/pages/Home.jsx` |

---

## 🎯 Content Categories

### Writeup Categories
- Incident Response
- Threat Hunting
- Digital Forensics
- Email Security
- Malware Analysis
- Network Security

### Tool Categories
- Network Analysis
- Memory Forensics
- SIEM
- Digital Forensics
- Web Security
- Malware Detection

### Severity Levels
- Critical (Red)
- High (Orange)
- Medium (Yellow)
- Low (Blue)

---

## 🔗 Useful Links

- **Unsplash (Images)**: https://unsplash.com/s/photos/cybersecurity
- **Lucide Icons**: https://lucide.dev/icons/
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Netlify Dashboard**: https://app.netlify.com/

---

**Need detailed instructions?** See the full [README.md](./README.md)
