
# CryptGuard UI - Next.js + Tailwind Starter

Includes:
- Next.js 14 starter structure
- Tailwind configured (tailwind.config.js)
- CSS variables (color system) in `styles/globals.css`
- `components/CryptGuardSidebar.jsx` — the sidebar UI with colors applied
- `pages/index.js` — demo dashboard that responds to tool clicks

How to run:
1. npm install
2. npm run dev
3. Open http://localhost:3000

Notes:
- This project includes Tailwind and PostCSS configs. If you want a bundled zip with `node_modules` included, tell me (larger file).


## Deployment PR helper

To create a deployment PR with these changes (workflow + vercel.json) run:

```bash
# create a branch
git checkout -b feature/deploy-setup
# add files
git add .github/vercel.json vercel.json
git commit -m "chore: add vercel deploy workflow and vercel.json"
git push -u origin feature/deploy-setup
# create PR (using GitHub CLI)
gh pr create --base main --head feature/deploy-setup --title "chore: add Vercel deploy workflow" --body "Adds GitHub Actions workflow to build and deploy to Vercel on push/PR. Remember to add VERCEL_TOKEN secret in repo settings."
```

Or create the branch and PR from the GitHub web UI.
