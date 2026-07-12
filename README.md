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

## About Tranzent

Tranzent Limited is a cargo and freight company specializing in car
logistics — professional, secure car delivery built to close the trust
gap that makes vehicle transportation feel risky. Every load moves with
insured precision and live visibility, so a handover feels less like a
shipment and more like a promise kept.

The name fuses **transit**, the discipline of movement, with **zen**,
the peace of mind that movement shouldn't cost you. That fusion — reliable
transit, delivered with absolute trust — is the operating standard behind
every vehicle Tranzent carries, and the standard this site is built to
reflect.

This repository contains the production marketing site: the public face
of the brand, the services catalogue, and the inquiry funnel that turns
visitors into routed quotes.

## Features

- **Photo-ready, brand-true design system** — a locked color, type, and
  motion scale (`tailwind.config.js`) so every new section stays visually
  consistent without design review.
- **Live-visibility credibility section** — an animated shipment-tracking
  card and route card (with a car icon in motion) that make Tranzent's
  transparency promise tangible rather than just stated.
- **Graceful image fallbacks** — every photo slot (`components/MediaFrame.jsx`)
  degrades to a bespoke branded illustration if an image is missing, so
  the site never ships with a broken image.
- **Fully accessible inquiry flow** — validated contact form with a
  responsive, animated success/error modal, keyboard and focus-visible
  support throughout.
- **Mobile-first, ultra-wide-tested responsiveness** — scales cleanly
  from a 360px handset to a 4K monitor.
- **Zero placeholder copy** — every line of marketing copy is
  purpose-written for Tranzent; no Lorem Ipsum, no fabricated statistics.

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
