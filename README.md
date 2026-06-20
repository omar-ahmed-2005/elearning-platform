# Weekend UX — E-Learning Platform

A responsive e-learning landing page built with **React 18** and **react-router-dom v6**, styled with custom BEM CSS. No UI framework dependency on the core pages — just clean, handwritten styles.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 (Create React App) |
| Routing | react-router-dom v6 |
| Icons | Font Awesome 6.5 (CDN), lucide-react |
| Fonts | Nunito (Home), Inter (Auth pages) — Google Fonts |
| CSS | Custom BEM (Home), shared auth.css (Login/Register) |
| Optional utilities | Tailwind CSS v3 (available but not used on core pages) |
| Auth (prototype) | localStorage |
| Deployment | Vercel (vercel.json included) |

---

## Getting Started

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production bundle → /build
```

If you hit `react-scripts not recognized` or EBUSY errors on Windows, run the recovery script:

```bash
.\fix-npm.bat
```

---

## Folder Structure

```
src/
├── App.jsx                        # Router — all routes defined here
├── App.css                        # Minimal root flex override
├── index.js                       # Entry point
├── index.css                      # Global tokens, resets, scrollbar
│
├── pages/
│   ├── auth.css                   # ← Shared styles for Login + Register
│   │
│   ├── Home/
│   │   ├── Home.jsx               # Assembles all WeekendUX sections
│   │   └── Home.css              # Master stylesheet (~1900 lines, BEM)
│   │
│   ├── Login/
│   │   ├── Login.jsx
│   │   └── Login.css              # Page-specific overrides only
│   │
│   ├── Register/
│   │   ├── Register.jsx
│   │   └── Register.css          # Page-specific overrides only
│   │
│   ├── AboutUs/AboutUs.jsx        # Structure done, unstyled
│   ├── Courses/Courses.jsx        # Data + filter logic done, unstyled
│   ├── ContactUs/ContactUs.jsx    # Form logic done, unstyled
│   └── FAQ/FAQ.jsx                # Accordion logic done, unstyled
│
├── components/
│   └── WeekendUX/
│       ├── Navbar.jsx             # NavLink active state, mobile toggle
│       ├── Hero.jsx
│       ├── Services.jsx + Services.css
│       ├── PopularClasses.jsx
│       ├── Tutors.jsx
│       ├── Testimonial.jsx
│       ├── Blogs.jsx
│       ├── Brands.jsx
│       └── Footer.jsx
│
└── image/                         # All static assets live here
```

> **Note:** `src/logo.svg`, `src/App.test.js`, `src/reportWebVitals.js`, and `src/setupTests.js` are unused CRA boilerplate. Safe to delete before final deployment.

---

## Completed Modules

### Home Page ✅
- 8 sections: Navbar, Hero, Services, Popular Classes, Tutors, Testimonial, Blogs, Footer
- BEM CSS architecture with CSS custom properties (design tokens)
- Fully responsive — mobile, tablet, desktop
- Font Awesome icons + Google Fonts (Nunito)
- NavLink active state with animated green underline

### Login Page ✅
- Two-panel card layout (image + form)
- Show/hide password toggle
- "Remember me" checkbox
- localStorage-based credential validation
- Inline error messages (no alert() calls)
- Social login buttons (Google, Facebook)
- Responsive down to 375px

### Register Page ✅
- Same card layout as Login for visual consistency
- Password length validation (min 6 chars)
- Confirm password match check
- Saves account to `localStorage` → Login reads from it
- Redirects to `/login` after successful registration

---

## Auth System (Prototype)

This is a localStorage-based flow for demo/prototype purposes:

```
Register → saves to localStorage['weekendux_user']
Login    → reads localStorage['weekendux_user'], validates, writes localStorage['weekendux_session']
```

**To replace with real auth:** swap the localStorage logic in `Login.jsx` and `Register.jsx` with Firebase Auth calls (`signInWithEmailAndPassword` / `createUserWithEmailAndPassword`). Firebase is already installed (`firebase ^10.12.0`).

---

## CSS Architecture

### Home Page — BEM
All styles live in `src/pages/Home/Home.css`. Classes follow the pattern:

```
.block { }
.block__element { }
.block--modifier { }
```

### Auth Pages — Shared Base + Overrides
```
src/pages/auth.css          ← shared layout, form, button styles
src/pages/Login/Login.css   ← Login-specific tweaks only
src/pages/Register/Register.css  ← Register-specific tweaks only
```

### CSS Design Tokens (Home page)
```css
--green: #2ECC8F
--color-primary: #20B486
--color-text-dark: #111827
--font-primary: 'Nunito', sans-serif
--container-max-width: 1280px
```

### Auth Page Accent Color
```css
#49BBBD  /* teal — used for tabs, inputs, submit button */
```

---

## 🤝 Handoff — Next Steps for the Team

The following pages have their **component structure and logic already in place** — they just need CSS styling to match the design system:

| Page | File | What's done | What's needed |
|---|---|---|---|
| **About Us** | `src/pages/AboutUs/AboutUs.jsx` | Layout, images, content | CSS styling |
| **Courses** | `src/pages/Courses/Courses.jsx` | Data, category filter, sort | CSS for grid + filter bar |
| **Contact Us** | `src/pages/ContactUs/ContactUs.jsx` | Form, validation, map | CSS layout |
| **FAQ** | `src/pages/FAQ/FAQ.jsx` | Accordion, search filter | CSS styling |

### Styling Guidelines for Remaining Pages
1. Import `../../components/WeekendUX/Navbar` and `Footer` — already wired up correctly
2. Use CSS variables from `src/index.css` (`--primary`, `--text-dark`, etc.)
3. Follow the same BEM pattern used in `Home.css`
4. Target `768px` and `480px` breakpoints for responsiveness

### Firebase Integration
Firebase is installed but not yet configured. To connect:
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Add a `src/firebase.js` config file
3. Replace localStorage auth in Login/Register with Firebase Auth SDK calls

### Deployment
Push to GitHub → import on [vercel.com](https://vercel.com). The `vercel.json` in the project root handles SPA routing automatically (no 404s on deep links).

---

## NPM Troubleshooting (Windows)

```bash
.\fix-npm.bat        # kills node, deletes node_modules, clean install
npx react-scripts start  # bypass local path issues
```

`.npmrc` is pre-configured with 10-minute fetch timeout for slow connections.
