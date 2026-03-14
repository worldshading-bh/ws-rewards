# WS Rewards

WS Rewards is a production-ready Progressive Web App for World Shading customers, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and `next-pwa`.

## Highlights

- Mobile-first premium UI with dark and light themes
- Installable PWA with manifest, service worker generation, offline fallback, and home screen support
- App Router architecture with reusable components and mock services
- Smooth card, page, and progress animations using Framer Motion
- Clean structure prepared for future ERPNext API integration
- Compatible with Vercel and Cloudflare-oriented deployments

## Tech stack

- Next.js 15
- TypeScript
- Tailwind CSS
- next-pwa
- Framer Motion
- React Server Components
- next-themes

## Project structure

```text
app/
components/
hooks/
public/icons/
services/
styles/
types/
utils/
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

4. Log in with any phone number and demo OTP: `123456`

## Production build

```bash
npm run build
npm run start
```

## PWA notes

- `public/manifest.json` contains install metadata
- `next-pwa` generates the service worker during production builds
- Offline document fallback routes users to `/offline`
- The app includes safe-area spacing and a custom install prompt

## Deploying to Vercel

1. Import the repository into Vercel
2. Framework preset: `Next.js`
3. Build command: `npm run build`
4. Output: default Next.js output

## Deploying to Cloudflare Pages

This project keeps to platform-friendly Next.js features so it is easy to adapt for Cloudflare deployment.

Typical workflow:

1. Connect the repository to Cloudflare Pages
2. Use `npm install` and `npm run build`
3. Configure the project using your preferred Cloudflare Next.js adapter or OpenNext-compatible workflow

## Next integrations

The mock data layer is intentionally simple so it can later connect to ERPNext loyalty, customer, and invoice APIs with minimal refactoring.
