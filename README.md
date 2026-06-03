# Cowrywise-clone — Deploy Instructions

Quick steps to deploy this Vite + React app to Vercel with minimal issues.

## Recommended Vercel project settings
- **Root Directory:** `/` (repository root)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** None / Static (use `@vercel/static-build` if using custom builds)

Important notes:
- Ensure `index.html` uses a relative module import:

  ```html
  <script type="module" src="./src/main.jsx"></script>
  ```

- Vite `base` should be relative in `vite.config.js`:

  ```js
  export default defineConfig({
    plugins: [react()],
    base: './',
  })
  ```

- File name casing matters on Linux-based build servers (e.g. Vercel). Verify `src/main.jsx` matches exactly.

## Deploy via Git (recommended)
1. Commit and push changes to the branch connected to Vercel:

```bash
git add .
git commit -m "Fix Vite build for Vercel and add deploy instructions"
git push origin main
```

Vercel will automatically build after push.

## Deploy with Vercel CLI
1. Install and login:

```bash
npm i -g vercel
vercel login
```
2. From project root run:

```bash
vercel --prod
```

## If you see resolution errors
- Confirm the project Root Directory in the Vercel dashboard is the repository root.
- Confirm Build Command is `npm run build` and Output Directory is `dist`.
- Confirm there are no stray leading slashes in `index.html` script imports (use `./src/main.jsx`).

If you'd like, I can also create a short `vercel` deploy script in `package.json` or prepare a PR for you — which would you prefer?