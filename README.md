# Documentation

Welcome to my personal website repository. This is a [Astro](https://astro.build) project. Continue
reading to learn more about the project structure, commands, and more.

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
|       └── menu.astro
|       └── 404.astro
|       └── projects/
|           └── index.astro
├── .gitignore
├── .prettierrc
├── README.md
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package-lock.json
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro components.

Any static assets, like images, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 API Reference?

Check [Astro docs](https://docs.astro.build) for more information or jump into the [Discord server](https://astro.build/chat).