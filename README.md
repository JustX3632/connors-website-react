# Connor Taleb – Personal Website

A React + Vite portfolio site for Connor Taleb, showcasing projects, research, resume, and blog.

## Features
- Dark mode forced by default via `document.documentElement.classList.add('dark')`
- Responsive layout using Tailwind CSS with `clamp()` for font sizing
- Page routing with React Router
- Blog powered by MDX files in `src/content/blog`

## Getting Started
```bash
npm ci          # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build (outputs to ./dist)
npm run preview  # preview the built site locally
```

## Deploy
The repo can be deployed to Vercel (or any static host). Vercel configuration is in `vercel.json`. After a successful `npm run build`, push the `dist/` folder or let Vercel build from the repo.

## License
MIT License – see the `LICENSE` file in the repository.

## Contributing
Open issues or submit pull requests. Keep the same coding style (ASCII only, no emojis) and run `npm run lint` before submitting.
