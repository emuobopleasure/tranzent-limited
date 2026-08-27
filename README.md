<div align="center">

# Tranzent Limited
### Cargo & Freight Company · Car Logistics

**Professional & secure car delivery - bridging the trust gap with reliable transit.**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-25AAE1?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-1AB42E?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Proprietary-F7941D)](./LICENSE)

</div>

---

#About Tranzent

Tranzent Limited is a cargo and freight company specializing in car logistics. We provide professional and secure vehicle transport built to close the trust gap that can make vehicle transportation feel risky. Every load moves with insured precision and live visibility, so every handover feels less like a shipment and more like a promise kept.

The name combines transit, the discipline of movement, with zen, the peace of mind that movement should bring. That idea of reliable transit and peace of mind is at the heart of Tranzent and the standard this site is built to reflect.

This repository contains the production marketing site, including the public-facing brand experience, services catalogue, and inquiry funnel that turns visitors into routed quotes.

Features
Photo-ready, brand-true design system
A consistent color, type, and motion scale (tailwind.config.js) keeps every section visually aligned without needing a design review.
Live-visibility credibility section
An animated shipment-tracking card and route card, complete with a moving car icon, bring Tranzent's transparency promise to life.
Graceful image fallbacks
Every photo slot (components/MediaFrame.jsx) falls back to a custom branded illustration when an image is unavailable, so the site never shows a broken image.
Fully accessible inquiry flow
A validated contact form with a responsive success/error modal, keyboard support, and clear focus states throughout.
Mobile-first, ultra-wide-tested responsiveness
The site scales cleanly from a 360px handset to a 4K monitor.
Zero placeholder copy
Every line of marketing copy is written specifically for Tranzent. No Lorem Ipsum and no made-up statistics.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| UI library | [React 18](https://react.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Language | JavaScript (no TypeScript, by design) |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (data/labels) — via `next/font/google` |
| Hosting target | [Vercel](https://vercel.com) (or any Node-compatible host) |

## Project Structure
