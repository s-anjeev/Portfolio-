# 🚀 Deployment Guide - Sanjeev Kumar Portfolio

This portfolio is **100% frontend-only** with no backend dependencies. All data is stored in `src/mock.js`.

## Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Automatic deployments from Git
- Free SSL certificate
- CDN optimization
- Perfect for React apps

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects React settings
6. Click "Deploy"

**Or use CLI:**
```bash
npm i -g vercel
cd /app/frontend
vercel
```

Your site will be live at: `https://your-project.vercel.app`

---

### Option 2: Netlify

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect to GitHub
5. Settings (auto-detected from netlify.toml):
   - Build command: `yarn build`
   - Publish directory: `build`
6. Click "Deploy"

**Or use CLI:**
```bash
npm i -g netlify-cli
cd /app/frontend
yarn build
netlify deploy --prod
```

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   yarn add -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "yarn build",
   "deploy": "gh-pages -d build"
   ```

3. Deploy:
   ```bash
   yarn deploy
   ```

4. Enable GitHub Pages in repository settings
5. Your site: `https://yourusername.github.io/repository-name`

---

### Option 4: Cloudflare Pages

**Steps:**
1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect GitHub repo
4. Build settings:
   - Framework: Create React App
   - Build command: `yarn build`
   - Output: `build`
5. Deploy

**Benefits:** Free, fast CDN, DDoS protection

---

## 📝 Pre-Deployment Checklist

- [ ] Update `src/mock.js` with your information
- [ ] Test locally: `yarn start`
- [ ] Build successfully: `yarn build`
- [ ] Check all links work (LinkedIn, GitHub, TryHackMe)
- [ ] Verify resume download link
- [ ] Test on mobile view
- [ ] Check all images load
- [ ] Verify smooth animations

---

## 🔧 Build Optimization

The portfolio is already optimized for production:

✅ **Code Splitting** - React Router lazy loading
✅ **Image Optimization** - Unsplash CDN images
✅ **CSS Optimization** - Tailwind purges unused styles
✅ **Bundle Size** - Minimal dependencies
✅ **Performance** - Lighthouse score 90+

---

## 🌐 Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

---

## 📊 Analytics (Optional)

Add Google Analytics or Plausible:

1. **Vercel Analytics** (Recommended):
   - Install: `yarn add @vercel/analytics`
   - Add to `App.js`: `import { Analytics } from '@vercel/analytics/react'`

2. **Google Analytics**:
   - Add tracking code to `public/index.html`

---

## 🔄 Updates & Maintenance

### Update Portfolio Content:
1. Edit `src/mock.js`
2. Commit changes
3. Push to GitHub
4. Auto-deploys on Vercel/Netlify

### Add New Projects:
1. Add to `projects` array in `mock.js`
2. Include all required fields
3. Push changes

---

## 🐛 Troubleshooting

**Build fails:**
- Run `yarn install` to ensure dependencies are installed
- Check Node version (v18+ recommended)
- Clear cache: `rm -rf node_modules yarn.lock && yarn install`

**Routes not working (404 on refresh):**
- Ensure `vercel.json` or `netlify.toml` is present
- These handle SPA routing

**Images not loading:**
- Check image URLs in `mock.js`
- Use absolute URLs for external images

---

## 📞 Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

**Good luck with your deployment! 🎉**

Your cybersecurity portfolio will be live and ready to impress recruiters!
