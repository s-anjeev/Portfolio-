# 🛡️ Cybersecurity Portfolio - Sanjeev Kumar

A modern, animated cybersecurity portfolio showcasing incident response writeups, SOC investigations, and technical expertise. Built with React, Tailwind CSS, and Shadcn UI components.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Deployment](#-deployment)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to Netlify](#deploy-to-netlify)
- [Content Management](#-content-management)
  - [Personal Information](#1-personal-information)
  - [Career Timeline](#2-career-timeline-experience)
  - [Incident Response Writeups](#3-incident-response--writeups)
  - [Technical Arsenal](#4-technical-arsenal-tools)
  - [Contact Information](#5-contact-information)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

- **🎨 Modern Dark Theme**: Cybersecurity-focused design with blue/cyan accents
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎭 Smooth Animations**: Scroll-triggered animations using Framer Motion
- **📊 SOC Incident Reports**: Professional structure following Detection → Investigation → Impact → Response → Lessons Learned
- **🔧 Technical Arsenal**: Categorized tools with expandable details
- **📝 Writeup System**: Detailed incident response case studies with MITRE ATT&CK mapping
- **🚀 Static Deployment Ready**: No backend required - deploy to Vercel/Netlify instantly

---

## 🛠 Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality UI component library
- **Lucide Icons** - Icon library
- **React Router** - Client-side routing
- **Framer Motion** - Animation library (integrated in Shadcn)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Yarn** (v1.22 or higher) - Install globally:
  ```bash
  npm install -g yarn
  ```

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd /app/frontend
   ```

2. **Install all dependencies:**
   ```bash
   yarn install
   ```

   This will install all packages listed in `package.json`, including:
   - React and React DOM
   - Tailwind CSS and PostCSS
   - Shadcn UI components (Radix UI primitives)
   - React Router for navigation
   - Lucide icons
   - All other dependencies

   **⏱️ Installation takes approximately 2-3 minutes**

### Running Locally

1. **Start the development server:**
   ```bash
   yarn start
   ```

2. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - Hot reload is enabled - changes will reflect automatically

3. **Stop the server:**
   - Press `Ctrl + C` in the terminal

---

## 🌐 Deployment

This is a **100% static frontend application** with no backend or database. It can be deployed to any static hosting platform.

### Deploy to Vercel

Vercel offers the easiest deployment experience for React apps.

#### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from the frontend directory:**
   ```bash
   cd /app/frontend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (first time) or `Y` (updating)
   - Project name: `cybersecurity-portfolio` (or your choice)
   - In which directory is your code located: `./`
   - Want to override settings: `N`

5. **Production deployment:**
   ```bash
   vercel --prod
   ```

#### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend`
     - **Build Command**: `yarn build`
     - **Output Directory**: `build`
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Vercel Configuration

The repository includes a `vercel.json` file with optimized settings:

```json
{
  "buildCommand": "yarn build",
  "outputDirectory": "build",
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy to Netlify

#### Option 1: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build the project:**
   ```bash
   yarn build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod --dir=build
   ```

#### Option 2: Netlify Dashboard

1. **Build your project:**
   ```bash
   yarn build
   ```

2. **Drag & Drop:**
   - Go to [netlify.com](https://app.netlify.com)
   - Drag the `build` folder to deploy

3. **Or connect via Git:**
   - Push to GitHub
   - Click "New site from Git"
   - Select repository
   - Build settings:
     - **Base directory**: `frontend`
     - **Build command**: `yarn build`
     - **Publish directory**: `frontend/build`

#### Netlify Configuration

The repository includes a `netlify.toml` file:

```toml
[build]
  command = "yarn build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📝 Content Management

All content is managed through the `/app/frontend/src/mock.js` file. This is your single source of truth for all portfolio data.

### 1. Personal Information

**Location:** `/app/frontend/src/mock.js` - Lines 1-11

```javascript
export const studentInfo = {
  name: "Sanjeev Kumar",
  title: "Cybersecurity Professional | VAPT & SOC Specialist",
  bio: "Your bio description here...",
  email: "your-email@example.com",
  phone: "+91 XXXXX-XXXXX",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/your-username",
  tryhackme: "https://tryhackme.com/p/your-username",
  resumeUrl: "https://your-resume-url.pdf"
};
```

**What to update:**
- `name`: Your full name
- `title`: Your professional title/tagline
- `bio`: Brief professional summary (2-3 sentences)
- `email`: Your contact email
- `phone`: Your phone number with country code
- `linkedin`: Full LinkedIn profile URL
- `github`: Full GitHub profile URL
- `tryhackme`: TryHackMe profile URL
- `resumeUrl`: Direct link to your resume PDF (upload to cloud storage like Google Drive, Dropbox, or AWS S3)

---

### 2. Career Timeline (Experience)

**Location:** `/app/frontend/src/mock.js` - Lines 13-28

```javascript
export const experiences = [
  {
    id: 1,
    year: "2024-25",
    role: "Cyber Security Intern",
    company: "AMAHA (innerHour)",
    description: "Your job description and achievements..."
  },
  // Add more experiences...
];
```

**How to add a new experience:**

```javascript
{
  id: 3,  // Increment the ID
  year: "2023-24",
  role: "Security Analyst",
  company: "Your Company Name",
  description: "Detailed description of your role, responsibilities, and achievements. Include metrics and impact where possible."
}
```

**How to remove an experience:**
- Simply delete the entire object block `{ id: X, ... }`

**Display Order:**
- Experiences are displayed in **reverse order** (newest first)
- Add newest experiences at the **top** of the array

---

### 2.5. SOC & Incident Response Achievements

**Location:** `/app/frontend/src/mock.js` - After experiences array

This section displays your hands-on incident response experience and SOC achievements between the Career Timeline and Writeups sections.

```javascript
export const incidentResponseStats = {
  totalIncidents: "5+",
  heading: "Incident Response Experience",
  subheading: "Hands-on SOC analysis and threat detection across multiple attack vectors",
  achievements: [
    {
      id: 1,
      title: "Email Security Incidents",
      count: "2+",
      description: "Phishing campaigns, spoofing attacks, malicious attachments",
      icon: "Mail"
    },
    // ... more achievements
  ]
};
```

**How to update stats:**

1. **Update total incidents:**
   ```javascript
   totalIncidents: "10+"  // Change to your count
   ```

2. **Customize heading/subheading:**
   ```javascript
   heading: "Your Custom Heading",
   subheading: "Your description of experience"
   ```

3. **Add new achievement:**
   ```javascript
   {
     id: 5,  // Increment ID
     title: "Web Application Attacks",
     count: "4+",
     description: "SQL injection, XSS, CSRF, authentication bypass",
     icon: "Globe"  // Mail, Shield, Bug, Network, Globe, Search
   }
   ```

4. **Update existing achievement:**
   - Change `title`: Achievement category name
   - Change `count`: Number of incidents (e.g., "3+", "5+", "10+")
   - Change `description`: Brief description of incident types
   - Change `icon`: Choose from: Mail, Shield, Bug, Network, Globe, Search

**Example - Advanced SOC Analyst:**
```javascript
export const incidentResponseStats = {
  totalIncidents: "50+",
  heading: "SOC Operations & Incident Response",
  subheading: "Level 2 SOC analyst with extensive incident triage and threat hunting experience",
  achievements: [
    {
      id: 1,
      title: "Phishing & Email Threats",
      count: "15+",
      description: "Business email compromise, credential harvesting, malicious payloads",
      icon: "Mail"
    },
    {
      id: 2,
      title: "Endpoint Security",
      count: "20+",
      description: "Ransomware, trojans, rootkits, privilege escalation",
      icon: "Shield"
    },
    {
      id: 3,
      title: "Malware Reverse Engineering",
      count: "8+",
      description: "Static/dynamic analysis, IOC extraction, YARA rule development",
      icon: "Bug"
    },
    {
      id: 4,
      title: "Network Intrusions",
      count: "12+",
      description: "Lateral movement, C2 communications, data exfiltration",
      icon: "Network"
    }
  ]
};
```

**Available Icons:**
- `Mail` - Email security, phishing
- `Shield` - Defense, protection, brute-force
- `Bug` - Malware, vulnerabilities
- `Network` - Network attacks, C2, exfiltration
- `Globe` - Web attacks, application security
- `Search` - Threat hunting, forensics

**Visual Impact Tips:**
- Use specific numbers: "12+" looks more credible than "10+"
- Be concise in descriptions: 5-8 words max
- Align achievement categories with your writeups
- Update counts as you respond to more incidents

---

### 3. Incident Response & Writeups

**Location:** `/app/frontend/src/mock.js` - Lines 30-414

There are two formats for writeups:

#### Format 1: SOC Incident Report (Professional)

Used for the first writeup. This follows the standard Detection → Investigation → Impact → Response → Lessons Learned structure.

```javascript
{
  id: 1,
  title: "Ransomware Attack Investigation",
  category: "Incident Response",
  thumbnail: "https://images.unsplash.com/photo-XXXXX",
  summary: "Brief 1-2 sentence summary",
  date: "December 2024",
  severity: "Critical",  // Critical, High, Medium, Low
  socReport: {
    detection: { /* ... */ },
    investigation: { /* ... */ },
    impact: { /* ... */ },
    response: { /* ... */ },
    lessonsLearned: { /* ... */ }
  }
}
```

**Full SOC Report Structure:**

```javascript
socReport: {
  detection: {
    summary: "How and when the incident was detected",
    alertSource: "Which system/tool detected it",
    initialIndicators: [
      "IOC 1",
      "IOC 2",
      "IOC 3"
    ],
    mitreAttack: ["T1486 - Technique Name", "T1059 - Another Technique"],
    killChainPhase: "Delivery / Exploitation / Installation / etc."
  },
  investigation: {
    summary: "Overall investigation summary",
    rootCause: "What caused the incident",
    timeline: [
      { time: "09:15 AM", event: "Event description", phase: "Detection" },
      { time: "09:30 AM", event: "Another event", phase: "Containment" }
    ],
    forensicFindings: [
      {
        title: "Finding Title",
        description: "Detailed description",
        evidence: "Evidence collected",
        mitreAttack: "T1566.001 - Technique"
      }
    ],
    toolsUsed: ["Tool 1", "Tool 2", "Tool 3"]
  },
  impact: {
    severity: "Critical",
    scope: {
      affectedSystems: "Description of affected systems",
      dataLoss: "Data loss information",
      downtime: "Duration of downtime",
      businessImpact: "Business impact description"
    },
    affectedAssets: [
      "Asset 1",
      "Asset 2"
    ],
    estimatedCost: "$XX,XXX"
  },
  response: {
    containment: [
      "Containment action 1",
      "Containment action 2"
    ],
    eradication: [
      "Eradication step 1",
      "Eradication step 2"
    ],
    recovery: [
      "Recovery step 1",
      "Recovery step 2"
    ],
    communication: [
      "Communication action 1",
      "Communication action 2"
    ]
  },
  lessonsLearned: {
    whatWorkedWell: [
      "What worked well 1",
      "What worked well 2"
    ],
    areasForImprovement: [
      "Area to improve 1",
      "Area to improve 2"
    ],
    recommendations: [
      {
        priority: "Critical",  // Critical, High, Medium, Low
        action: "Action to take",
        owner: "Team responsible",
        timeline: "30 days"
      }
    ],
    mitreMapping: "Summary of MITRE ATT&CK mapping",
    killChainMapping: "Summary of Cyber Kill Chain mapping"
  }
}
```

#### Format 2: Legacy Report (Simple)

Used for other writeups. Simpler structure for quick case studies.

```javascript
{
  id: 2,
  title: "Advanced Persistent Threat Detection",
  category: "Threat Hunting",
  thumbnail: "https://images.unsplash.com/photo-XXXXX",
  summary: "Brief summary",
  date: "November 2024",
  severity: "High",
  detailedReport: {
    executiveSummary: "Overview of the incident",
    timeline: [
      { time: "Week 1", event: "Event description", status: "detected" }
    ],
    findings: [
      {
        title: "Finding title",
        description: "Finding description",
        severity: "high",  // critical, high, medium, low
        evidence: "Evidence details"
      }
    ],
    recommendations: [
      "Recommendation 1",
      "Recommendation 2"
    ],
    toolsUsed: ["Tool 1", "Tool 2"]
  }
}
```

**How to add a new writeup:**

1. Copy an existing writeup structure
2. Increment the `id`
3. Update all fields with your data
4. Choose a thumbnail from [Unsplash](https://unsplash.com/s/photos/cybersecurity)
5. Add to the `projects` array

**How to remove a writeup:**
- Delete the entire object block from the array

**Writeup Categories:**
- Incident Response
- Threat Hunting
- Digital Forensics
- Email Security
- Malware Analysis
- Network Security

#### Format 3: External Article Link (Medium, Blog, etc.)

Use this format to link to articles published on Medium or other external platforms instead of hosting the full writeup on your portfolio.

**Location:** `/app/frontend/src/mock.js`

```javascript
{
  id: 7,
  title: "Building a Modern SOC: Lessons from the Frontlines",
  category: "Cybersecurity Insights",  // Any category
  thumbnail: "https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop",
  summary: "Brief 2-3 line description of the article content.",
  date: "January 2025",
  severity: "Medium",  // Optional: Critical, High, Medium, Low
  readTime: "8 min read",  // Display custom read time
  externalUrl: "https://medium.com/@yourusername/your-article-slug",
  isExternal: true  // REQUIRED: Tells the app this is an external link
}
```

**How to update the Medium article link (Project ID 7):**

1. Open `/app/frontend/src/mock.js`
2. Find the writeup with `id: 7`
3. Update the following fields:

```javascript
{
  id: 7,
  title: "YOUR ARTICLE TITLE",  // Copy from Medium
  category: "YOUR CATEGORY",  // e.g., "Threat Intelligence", "Security Research"
  summary: "YOUR 2-3 LINE SUMMARY",  // Brief description
  date: "MONTH YEAR",  // e.g., "March 2025"
  readTime: "X min read",  // e.g., "10 min read" (check Medium)
  externalUrl: "YOUR_MEDIUM_ARTICLE_URL",  // Full URL
  isExternal: true  // Keep this as true
}
```

**Example - Real Medium Article:**

```javascript
{
  id: 7,
  title: "Hunting APTs with YARA Rules: A Practical Guide",
  category: "Malware Analysis",
  thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  summary: "Comprehensive guide to writing effective YARA rules for advanced persistent threat detection, including real-world examples and best practices.",
  date: "February 2025",
  severity: "Medium",
  readTime: "12 min read",
  externalUrl: "https://medium.com/@sanjeevkumar/hunting-apts-with-yara-rules-abc123",
  isExternal: true
}
```

**What happens when users click:**
- The card shows "Read on Medium" instead of "Read Article"
- Clicking opens the Medium article in a new tab
- Users are redirected to your external content

**Thumbnail Image Options:**
- Use Unsplash: `https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop`
- Search Unsplash: https://unsplash.com/s/photos/cybersecurity
- Use Medium's featured image URL (must be publicly accessible)

---

### 4. Technical Arsenal (Tools)

**Location:** `/app/frontend/src/mock.js` - Lines 416-489

```javascript
export const tools = [
  {
    id: 1,
    name: "Wireshark",
    category: "Network Analysis",
    description: "Tool description",
    usage: "How you used it in real scenarios",
    findings: "What you discovered using this tool",
    icon: "Network"  // Lucide icon name
  }
];
```

**Available Categories:**
- Network Analysis
- Memory Forensics
- SIEM
- Digital Forensics
- Web Security
- Malware Detection
- Malware Analysis
- Enterprise Forensics

**Available Icons** (from Lucide React):
- Network, Brain, Database, HardDrive, Globe, Shield, Box, Search, Terminal, Lock, Key, FileText, Server, Cloud, Code, Bug, Activity, Zap, Eye, Settings

**How to add a new tool:**

```javascript
{
  id: 9,  // Increment ID
  name: "Tool Name",
  category: "Category Name",
  description: "Brief 1-sentence description",
  usage: "Detailed explanation of how you used it in real-world scenarios",
  findings: "Key discoveries and results you achieved",
  icon: "IconName"  // Choose from Lucide icons
}
```

**How to remove a tool:**
- Delete the entire object from the array

---

### 5. Contact Information

Contact links are managed in the `studentInfo` object (see [Personal Information](#1-personal-information)).

The Contact Grid displays:
- **GitHub**: From `studentInfo.github`
- **LinkedIn**: From `studentInfo.linkedin`
- **Email**: From `studentInfo.email`
- **TryHackMe**: From `studentInfo.tryhackme`
- **Resume**: From `studentInfo.resumeUrl`

To update any contact link, simply modify the corresponding field in `studentInfo`.

---

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
│   └── index.html         # HTML template
├── src/
│   ├── components/        # Reusable components
│   │   └── ui/           # Shadcn UI components
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Main landing page
│   │   └── ProjectDetail.jsx  # Writeup detail page
│   ├── lib/              # Utility functions
│   ├── App.js            # Main app component
│   ├── index.js          # App entry point
│   ├── index.css         # Global styles
│   └── mock.js           # ⭐ ALL CONTENT DATA
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
└── README.md            # This file
```

**Key Files to Edit:**

| File | Purpose |
|------|---------|
| `src/mock.js` | **ALL portfolio content** (personal info, experiences, writeups, tools) |
| `src/pages/Home.jsx` | Homepage layout and structure |
| `src/pages/ProjectDetail.jsx` | Writeup detail page layout |
| `src/index.css` | Global styles and Tailwind imports |
| `tailwind.config.js` | Color scheme and theme customization |

---

## 🎨 Customization

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Change these to your preferred colors
      blue: { /* your blue shades */ },
      cyan: { /* your cyan shades */ },
      orange: { /* your orange shades */ }
    }
  }
}
```

### Change Fonts

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### Add New Sections

1. Edit `src/pages/Home.jsx`
2. Add a new `<section>` component
3. Import data from `mock.js` if needed
4. Style with Tailwind classes

### Modify Animations

Scroll animations use the `scroll-reveal` CSS classes defined in `src/index.css`. To adjust:

```css
/* src/index.css */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🐛 Troubleshooting

### Issue: "yarn: command not found"

**Solution:** Install Yarn globally:
```bash
npm install -g yarn
```

### Issue: Port 3000 already in use

**Solution:** Kill the process or use a different port:
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or start on a different port
PORT=3001 yarn start
```

### Issue: Build fails with memory error

**Solution:** Increase Node.js memory:
```bash
NODE_OPTIONS=--max_old_space_size=4096 yarn build
```

### Issue: Changes not reflecting

**Solutions:**
1. **Clear cache:**
   ```bash
   rm -rf node_modules yarn.lock
   yarn install
   ```

2. **Hard refresh browser:**
   - Windows/Linux: `Ctrl + Shift + R`
   - macOS: `Cmd + Shift + R`

3. **Clear browser cache**

### Issue: Vercel deployment fails

**Solution:** Ensure `vercel.json` has correct settings:
```json
{
  "buildCommand": "yarn build",
  "outputDirectory": "build"
}
```

### Issue: Images not loading

**Solution:** 
- Use full URLs for images (not relative paths)
- For thumbnails, use Unsplash with `?w=800&h=600&fit=crop` parameters
- Ensure resume URL is publicly accessible

---

## 📚 Additional Resources

- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Shadcn UI Components**: https://ui.shadcn.com/
- **Lucide Icons**: https://lucide.dev/icons/
- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com/

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🤝 Support

For issues or questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [Content Management](#-content-management) guide
3. Refer to the documentation links above

---

**Built with ❤️ for the cybersecurity community**

*Last updated: January 2025*
