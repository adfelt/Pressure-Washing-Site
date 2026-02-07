# Felt Pressure Washing Website - Setup Guide

## 🚀 Quick Start

### Step 1: Install Astro

Open your terminal and run:

```bash
# Create project folder
mkdir felt-pressure-washing
cd felt-pressure-washing

# Initialize Astro
npm create astro@latest . -- --template minimal --yes

# Install dependencies
npm install
```

### Step 2: Add Your Files

1. **Replace the homepage:**
   - Take the `index.astro` file I provided
   - Replace the contents of `src/pages/index.astro` with it

2. **Add your logo:**
   - Copy your `Felt_Pressure_washing.png` file
   - Rename it to `logo.png`
   - Put it in the `public/` folder

### Step 3: Customize Your Content

Open `src/pages/index.astro` and update these sections:

#### Update Phone Number (appears in 3 places):
```html
<!-- Line ~20: Header phone button -->
<a href="tel:+1234567890" class="cta-phone">

<!-- Line ~50: Hero CTA button -->
<a href="tel:+1234567890" class="btn btn-secondary">

<!-- Line ~290: Contact sidebar -->
<a href="tel:+1234567890">(123) 456-7890</a>
```
Replace `+1234567890` and `(123) 456-7890` with your actual phone number.

#### Update Email Address:
```html
<!-- Line ~299 and ~410 -->
info@feltpressurewashing.com
```

#### Update Service Area:
```html
<!-- Line ~308 -->
<span>Your City & Surrounding Areas</span>
```

#### Update Stats (Optional):
```html
<!-- Lines ~80-88: Hero stats section -->
<div class="stat-number">500+</div>  <!-- Projects completed -->
<div class="stat-number">100%</div>  <!-- Satisfaction rate -->
<div class="stat-number">10+</div>   <!-- Years experience -->
```

### Step 4: Add Before/After Photos

1. Create a folder: `public/gallery/`
2. Add your before/after images with these names:
   - `before-1.jpg`, `after-1.jpg`
   - `before-2.jpg`, `after-2.jpg`
   - `before-3.jpg`, `after-3.jpg`

3. Update the gallery section (around line 160) by replacing the placeholder divs:

```html
<div class="gallery-item">
  <img src="/gallery/before-1.jpg" alt="Before pressure washing">
</div>
<div class="gallery-item">
  <img src="/gallery/after-1.jpg" alt="After pressure washing">
</div>
```

### Step 5: Run Your Site Locally

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to see your site!

---

## 📤 Deploy to Production

### Option A: Deploy to Netlify (Recommended - FREE)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live in 2-3 minutes! Netlify gives you a free subdomain like `felt-pressure-washing.netlify.app`

### Option B: Deploy to Vercel (Also FREE)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site will be live with a free subdomain.

---

## 🔧 Next Steps (Optional Enhancements)

### Connect Your Contact Form to Email

Currently, the form shows an alert. To actually receive emails, choose one:

**Option 1: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the form submission code (around line 500) with:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

**Option 2: Web3Forms (No signup required)**
1. Go to [web3forms.com](https://web3forms.com)
2. Get a free access key
3. Add to your form:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
<input type="hidden" name="subject" value="New Estimate Request">
```

### Add Google Analytics (Track Visitors)

1. Create Google Analytics account
2. Add this before the closing `</head>` tag:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Buy a Custom Domain

After deploying to Netlify/Vercel:
1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In your hosting platform, go to Domain Settings
3. Follow instructions to connect your domain

---

## 📋 Project Structure

```
felt-pressure-washing/
├── src/
│   └── pages/
│       └── index.astro          # Your main landing page
├── public/
│   ├── logo.png                 # Your logo (add this)
│   └── gallery/                 # Before/after photos (create this)
│       ├── before-1.jpg
│       ├── after-1.jpg
│       └── ...
├── package.json
└── astro.config.mjs
```

---

## 🆘 Need Help?

Common issues:

**Site won't start:**
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again

**Images not showing:**
- Make sure they're in the `public/` folder
- File paths should start with `/` like `/logo.png`

**Form not working:**
- Check browser console for errors (F12)
- Make sure you've set up Formspree or Web3Forms

---

## ✅ Checklist Before Going Live

- [ ] Updated phone number in all 3 locations
- [ ] Updated email address
- [ ] Updated service area
- [ ] Added logo to `/public/logo.png`
- [ ] Added before/after photos
- [ ] Updated testimonials (optional - or remove if you don't have any yet)
- [ ] Updated stats to match your business
- [ ] Connected form to email service
- [ ] Tested form submission
- [ ] Tested on mobile device
- [ ] Set up custom domain (optional)
- [ ] Added Google Analytics (optional)

---

You're ready to launch! 🚀
