# paulcarsonmba.com

Personal portfolio site for Paul Carson. React + Vite, deployed to Cloudflare Pages.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. In the Cloudflare dashboard, go to **Workers & Pages > Create > Pages**
3. Connect your GitHub repo
4. Set build configuration:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy

Cloudflare will auto-deploy on every push to `main`.

## Custom domain

In Cloudflare Pages project settings, add `paulcarsonmba.com` as a custom domain. If the domain is already on Cloudflare DNS, it'll configure automatically.
