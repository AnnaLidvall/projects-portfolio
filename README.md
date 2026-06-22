# Anna Lidvall: Projects Portfolio

My personal portfolio site. It shows the work I have done during my studies, with a focus on SEO and UX research, most of all the **Eira Bygg och Fix** website.

I study the bachelor program in Digital Information Design and Development (Kandidatprogram i digital informationsdesign och utveckling) at the **University of Borås** in Sweden, and I spent an exchange semester at **Saxion University of Applied Sciences** in Enschede.

🔗 **Live site:** https://projects-portfolio.annalidvall.workers.dev/

![Astro](https://img.shields.io/badge/Astro-6.x-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Highlights
- **Fast:** built with Astro, so pages load quickly.
- **Fully responsive:** works on mobile, tablet, and desktop.
- **Accessible and SEO-ready:** semantic HTML and Open Graph metadata.
- **Easy to update:** all of my content lives in `/data`.

## 🚀 Running locally
Requires **Node.js** v22.12.0 or higher.

```bash
git clone https://github.com/AnnaLidvall/projects-portfolio.git
cd projects-portfolio
npm install
npm run dev
```

The dev server runs at `localhost:4321`.

## 📝 Editing the content

All of the portfolio content lives in **`data/`**:

- **`data/site.ts`**: hero text, about section, experience, featured projects, and contact links.
- **`data/nav.ts`**: the in-page navigation links.

Project images live in **`/public`**.

The color theme is set in **`src/config.ts`** via the `baseTheme` variable
(`'default'`, `'strategic'`, `'innovator'`, `'executive'`).

## 📁 Project structure
```
├── public/              # Static assets (images, favicon)
├── data/                # Portfolio content (site.ts, nav.ts)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Layout templates with meta tags
│   ├── pages/           # Site routes (index.astro)
│   ├── styles/          # Global CSS styles
│   └── config.ts        # Theme configuration
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🙏 Credits
Built on the **Projects Portfolio Template** created by **Masoud Soleymani**,
used and customized here under the MIT License.

## 📝 License
Licensed under the [MIT License](LICENSE).
</content>
</invoke>
