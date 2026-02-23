# Brainwave Frontend (React + Vite + TailwindCSS)

The Brainwave frontend is a modern, responsive React application built with Vite, TailwindCSS, and React Router. It provides a smooth user experience for generating AI images, managing credits, and navigating through a polished SaaS‑style interface. The app communicates with the Brainwave backend for authentication, credit tracking, and image generation.

## Features

- Modern UI/UX
  - Fully responsive design
  - TailwindCSS utility‑first styling
  - Animated gradients, parallax effects, and custom SVG components
  - Clean component architecture with reusable UI elements

- Routing & Navigation
  - Client‑side routing with React Router
  - Dedicated pages for:
    - Home
    - Features
    - How‑To‑Use
    - Roadmap
    - Buy Credits
    - Results
    - 404 Page

- Authentication & State Management
  - Global state via React Context
  - Token‑based authentication stored in localStorage
  - Auto‑loading user credits on login
  - Logout functionality

- AI Image Generation
  - Integrated with backend /generate-image route
  - Loading animation + progress bar
  - Base64 image rendering
  - Downloadable generated images
  - Redirect to Buy Credits when balance is insufficient

- Notifications
  - Toast notifications via react-toastify
  - Error handling for API failures

## Tech Stack

- React 18
- Vite
- React Router DOM
- TailwindCSS
- Axios
- React Toastify
- React Just Parallax
- Scroll‑Lock
- ESLint

## Folder Structure

```
client/
│
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, SVGs, icons
│ ├── components/ # Reusable UI components
│ │ ├── design/ # Decorative UI elements
│ │ ├── elements/ # Buttons, inputs, etc.
│ │ ├── layouts/ # Layout wrappers
│ │ ├── Auth.jsx
│ │ ├── Benefits.jsx
│ │ ├── Collaboration.jsx
│ │ ├── CompanyLogo.jsx
│ │ ├── Generating.jsx
│ │ ├── Hero.jsx
│ │ ├── Notification.jsx
│ │ ├── Pricing.jsx
│ │ ├── PricingList.jsx
│ │ ├── Roadmap.jsx
│ │ └── index.js
│ │
│ ├── constants/ # App constants
│ │ └── index.js
│ │
│ ├── context/ # Global state
│ │ └── AppContext.jsx
│ │
│ ├── hooks/ # Custom hooks
│ │ └── useTitle.jsx
│ │
│ ├── pages/ # Page-level components
│ │ ├── BuyCredit.jsx
│ │ ├── FeaturesPage.jsx
│ │ ├── Home.jsx
│ │ ├── InstructionsPage.jsx
│ │ ├── PageNotFound.jsx
│ │ ├── Results.jsx
│ │ ├── RoadmapPage.jsx
│ │ └── index.js
│ │
│ ├── routes/ # Routing logic
│ │ ├── AllRoutes.jsx
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ │
│ ├── App.css
│ └── index.css
│
├── .env # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml # Deployment config
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Environment Variables

Create a .env file in the project root:

`VITE_BACKEND_URL=`

For production (Netlify, Vercel, etc.)

## Installation

1. Clone the repository

   `git clone <your-frontend-repo-url>`

   `cd client`

2. Install dependencies

   `npm install`

3. Create your .env file

   Add your backend URL.

4. Start the development server

   `npm run dev`

## Routing Overview

#### Public Routes

| Page         | Path          | Description                |
| ------------ | ------------- | -------------------------- |
| Home         | `/`           | Landing page               |
| Feature      | `/features`   | Features overview          |
| Instructions | `/how-to-use` | Usuage Instructions        |
| Roadmap      | `/roadmap`    | Project roadmap (UI only)  |
| Results      | `results`     | AI image generation        |
| Buy Credits  | `buy-credits` | Purchase credits (UI only) |
| 404          | `*`           | 404 fallback page          |

## Context API Overview

The global context (AppContext) manages:

- user
- token
- credit
- generateImage()
- loadCreditsData()
- logout()
- backendUrl

## Image Generation Flow (SaaS)

1. User enters a prompt
2. generateImage(prompt) sends POST request to backend
3. Backend returns Base64 image
4. Credits are updated
5. Image is displayed + downloadable

## Deployment

This frontend can be deployed to:

- Netlify (recommended — already configured via netlify.toml)
- Vercel
- GitHub Pages (with Vite config tweaks)

Make sure to set VITE_BACKEND_URL in your hosting environment.

## License

ISC — © Cassidy Priestley
