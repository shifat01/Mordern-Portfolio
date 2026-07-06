# Modern Portfolio

A sleek, responsive personal portfolio website built with **React** and **Vite**. Showcase your projects, skills, and experience with fast load times and smooth interactions.

🔗 **Live Demo:** _[add your deployed link here]_

## ✨ Features

- ⚡ Fast development and builds powered by Vite + HMR
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎨 Clean, modern UI
- 🧩 Component-based architecture for easy customization
- 🔍 Optimized for performance and SEO

## 🛠️ Tech Stack

- **React 19** – UI library
- **Vite 7** – Build tool and dev server
- **Tailwind CSS 4** – Utility-first styling
- **Framer Motion** – Animations and gesture-driven interactions
- **EmailJS** (`@emailjs/browser`) – Sends the contact form without a backend
- **React Icons** – Icon set (React, Node, Mongo, Laravel, etc.)
- **ESLint 9** – Code linting

## 📂 Project Structure

```
Mordern-Portfolio/
├── public/
│   ├── music/            # Background music track
│   └── Resume.pdf
├── src/
│   ├── assets/            # Images used across sections
│   ├── sections/
│   │   ├── components/    # Navbar, OverlayMenu, CustomCursor,
│   │   │                     IntroAnimation, MusicPlayer, ParticlesBackground
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## ⚙️ Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root (already gitignored) with:

```
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/shifat01/Mordern-Portfolio.git
   cd Mordern-Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

## 🧐 Code Review Notes

A few honest notes from reviewing the source, useful context if you're presenting this as an interview project.

**What's solid:**
- Clean section-based structure (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Testimonials`, `Contact`, `Footer`) — easy to navigate and reason about.
- `Contact.jsx` correctly pulls EmailJS service/template/public keys from `import.meta.env` instead of hardcoding them, and `.env` is properly listed in `.gitignore`, so no secrets are leaked in the repo.
- Nice touches like an intro animation gate (`introDone` state in `App.jsx`), a custom cursor, a looping skills marquee driven by `framer-motion`'s `useMotionValue`, and a background music toggle — shows attention to UX/interaction detail beyond a static template.
- Scroll-based navbar show/hide logic combined with an `IntersectionObserver` on the hero section is a thoughtful way to keep the nav out of the way while scrolling but bring it back near the top.

**Bugs worth fixing before an interview walkthrough:**
- `Skills.jsx`: the wheel-scroll cleanup calls `window.removeEventListener('wheel', onwheel)` — lowercase `onwheel` instead of `onWheel`. Since `onwheel` isn't defined, the actual listener is never removed, so listeners stack up every time the effect re-runs.
- `Contact.jsx`: the "idea" textarea's error styling checks `errors.budget` instead of `errors.idea` (likely a copy-paste slip), and the error message `<p>` is rendered as a child of `<textarea>`, which isn't valid — textareas can only contain text, so that error text won't actually display as intended.
- `CustomCursor.jsx`: the `useEffect` that attaches the `mousemove` listener has no dependency array, so it tears down and re-attaches the listener on every render instead of once on mount.
- `Navbar.jsx`: the logo/name links point to `/home` rather than `#home`. Since this is a single-page app with no router, that will trigger a full page navigation/404 in production instead of scrolling to the hero section.
- `vite.config.js` still has a personal `ngrok` tunnel hostname hardcoded in `server.allowedHosts` — fine for local dev, but worth removing before sharing/deploying the repo.

**Smaller polish opportunities:**
- The email `<input>` in `Contact.jsx` uses `type="text"` rather than `type="email"`, so you lose free built-in format validation and the mobile email keyboard.
- Some state/variable names have typos (e.g. `positon` in `CustomCursor.jsx`, `validateFrom` instead of `validateForm` in `Contact.jsx`) — harmless functionally, but worth a cleanup pass for readability.

None of these are deep architectural problems — the overall structure, component boundaries, and use of environment variables for secrets are genuinely good habits. These are the kind of small, fixable bugs that are easy to explain and fix live in an interview, which can actually work in your favor if you walk through them confidently.

## 🌐 Deployment

This project can be deployed easily to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Simply connect your repository or upload the contents of the `dist/` folder after running `npm run build`.

## 📬 Contact

**Shifat** – feel free to reach out via GitHub [@shifat01](https://github.com/shifat01)

---

⭐️ If you like this project, consider giving it a star on GitHub!
