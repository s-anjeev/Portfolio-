# ✏️ Quick Customization Guide

Easy ways to personalize your portfolio without touching complex code.

## 📝 Update Your Information

### File: `src/mock.js`

This single file contains ALL your portfolio data. Edit it to customize:

### 1. Personal Info (Lines 1-12)
```javascript
export const studentInfo = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio...",
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  tryhackme: "https://tryhackme.com/p/yourprofile",
  resumeUrl: "link-to-your-resume.pdf"
};
```

### 2. Work Experience (Lines 14-40)
```javascript
export const experiences = [
  {
    id: 1,
    year: "2024-25",
    period: "Nov 2024 - Present",
    role: "Your Job Title",
    company: "Company Name",
    description: "What you did...",
  },
  // Add more experiences
];
```

### 3. Projects (Lines 42-150)
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Category",
    tags: ["Tag1", "Tag2", "Tag3"],
    readTime: "5 min read",
    summary: "Brief description...",
    // Detailed report fields...
  },
  // Add more projects
];
```

---

## 🎨 Change Colors

### File: `tailwind.config.js`

Easy color customization:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Change primary colors
        primary: 'your-color-hex',
        // Or use built-in Tailwind colors
      }
    }
  }
}
```

### Quick Color Changes in Components:

**Orange accents** → Search and replace:
- `from-orange-400` with `from-your-color`
- `text-orange-400` with `text-your-color`

**Cyan accents** → Search and replace:
- `from-cyan-400` with your preferred color
- `border-cyan-500` with your border color

---

## 🖼️ Change Project Images

Currently using Unsplash CDN. To change:

### Option 1: Use Different Unsplash Images
In `mock.js`, update `thumbnail` URLs:
```javascript
thumbnail: "https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=800&h=600&fit=crop"
```

Find images at [unsplash.com](https://unsplash.com)

### Option 2: Use Your Own Images
1. Add images to `public/images/`
2. Update thumbnail:
   ```javascript
   thumbnail: "/images/your-image.jpg"
   ```

---

## ✨ Add/Remove Sections

### Remove a Section:
1. Open `src/pages/Home.jsx`
2. Find the section (e.g., `{/* Technical Arsenal Section */}`)
3. Delete the entire `<section>...</section>` block
4. Update navigation links if needed

### Add a New Section:
1. Copy an existing section as template
2. Modify content
3. Add to navigation menu
4. Update `id` attribute

---

## 📱 Adjust Layout

### Change Grid Columns:

Find these classes in `Home.jsx`:
```javascript
// Current: 3 columns on large screens
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Change to 4 columns:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Change to 2 columns:
className="grid grid-cols-1 md:grid-cols-2"
```

### Adjust Spacing:
- Change `gap-6` to `gap-8` (more space)
- Change `gap-6` to `gap-4` (less space)
- Change `py-24` to `py-16` (less vertical padding)

---

## 🔤 Change Fonts

### File: `src/index.css`

```css
body {
  font-family: 'Your Font', -apple-system, sans-serif;
}
```

To add Google Fonts:
1. Add to `public/index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
   ```

2. Use in CSS:
   ```css
   font-family: 'Inter', sans-serif;
   ```

---

## 🏷️ Add New Skills/Tools

### File: `src/pages/Home.jsx`

Find the Technical Arsenal section and add a new card:

```javascript
<Card className="...">
  <CardContent className="p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-gradient-to-br from-YOURCOLOR-500 to-YOURCOLOR-600 rounded-lg">
        <YourIcon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-white">Your Category</h3>
        <p className="text-xs text-YOURCOLOR-400">3 tools</p>
      </div>
    </div>
    <div className="space-y-2">
      <div className="text-sm text-blue-200">Tool 1</div>
      <div className="text-sm text-blue-200">Tool 2</div>
      <div className="text-sm text-blue-200">Tool 3</div>
    </div>
    <p className="text-xs text-blue-300/60 mt-4">Description...</p>
  </CardContent>
</Card>
```

---

## 🔗 Update Social Links

### File: `src/mock.js`

Update the `studentInfo` object:
```javascript
linkedin: "https://linkedin.com/in/your-profile",
github: "https://github.com/your-username",
tryhackme: "https://tryhackme.com/p/your-username",
```

---

## 🎯 Quick Wins

**Top 5 easiest customizations:**
1. ✅ Update `mock.js` with your info (5 min)
2. ✅ Change email/phone in `studentInfo` (1 min)
3. ✅ Add your resume PDF link (1 min)
4. ✅ Update social media links (2 min)
5. ✅ Modify project descriptions (5 min)

**Total time to personalize: ~15 minutes** ⚡

---

## 🆘 Need Help?

- Check `README.md` for overall guidance
- See `DEPLOYMENT.md` for deployment steps
- Review `PERFORMANCE.md` for optimization tips

---

**Happy customizing! Make it yours! 🎨**
