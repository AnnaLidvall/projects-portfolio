/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://projects-portfolio.annalidvall.workers.dev/',
  meta: {
    title: 'Anna Lidvall | Portfolio',
    description:
      'Portfolio of Anna Lidvall, focused on SEO and UX research, studying Digital Information Design and Development at the University of Borås.',
  },
  hero: {
    name: 'Anna Lidvall',
    role: 'SEO & UX',
    tagline: 'I work with SEO and UX research to make websites that are easy to find and easy to use.',
    contact: 'I study Digital Information Design and Development in Sweden. Open to new opportunities, let\'s connect!',
    avatarSrc: '/anna.jpg',
    avatarAlt: 'Portrait of Anna Lidvall',
  },
  about: {
    paragraphs: [
      'I am Anna Lidvall. I study the bachelor program in Digital Information Design and Development (Kandidatprogram i digital informationsdesign och utveckling) at the University of Borås in Sweden, and I spent an exchange semester at Saxion University of Applied Sciences in Enschede. My main interests are SEO and UX research, in other words how people find a website and how easy it is to use once they get there.',
      'My latest project is a website for Eira Bygg och Fix, a small building and handyman company near Gothenburg, Sweden. I planned the content and the user flow, wrote clear copy in Swedish, and set up the SEO so the company can be found in search. I can also handle the code side, so I built the site myself, but the design and research is where I spend most of my time.',
      {
        heading: 'What I focus on',
        bullets: [
          'SEO: keyword research, structured data (JSON-LD), meta tags, and content that ranks',
          'UX research: user flows, clear navigation, and content that is easy to scan',
          'Accessibility and mobile-first layouts so the site works for everyone',
        ],
      },
      {
        heading: 'Tools I work with',
        techItems: ['SEO', 'UX Research', 'Content Design', 'HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  experiences: [
    {
      period: '2025',
      title: 'SEO & UX (School Project)',
      company: 'Eira Bygg och Fix',
      summary:
        'I planned the content, user flow, and SEO for a small Swedish building company, and built the website to match.',
      highlights: [
        'Did keyword research and wrote clear Swedish copy so the company can be found in local search',
        'Added SEO with schema.org JSON-LD data, meta descriptions, and a clear page structure',
        'Designed the user flow and navigation, with a mobile menu and an easy path to the quote form',
        'Built the site myself with HTML, CSS, and JavaScript, plus a small Node and Express backend for the form',
      ],
      tech: ['SEO', 'UX Research', 'Content Design', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
  featuredProjects: [
    {
      title: 'Eira Bygg och Fix Website',
      period: '2025',
      url: 'https://eirafix.annalidvall.workers.dev/',
      summary: 'A website for a small building and handyman company near Gothenburg. It shows the services, a project gallery, customer reviews, and a quote form.',
      solution: 'I planned the content and user flow, wrote the Swedish copy, and set up the SEO so the company can be found in local search. I also built the site, with a small backend that emails each quote request.',
      impact: 'A clear, easy-to-use site that helps the company show up in search and gives customers a simple way to ask for a quote.',
      image: 'eira-site.jpg',
      imageAlt: 'Home page of the Eira Bygg och Fix website',
      techCategories: [
        {
          category: 'SEO',
          items: ['Keyword Research', 'JSON-LD Structured Data', 'Meta Tags'],
        },
        {
          category: 'UX',
          items: ['User Flow', 'Content Design', 'Accessibility', 'Mobile-first'],
        },
        {
          category: 'Build',
          items: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'A short list of the projects I have worked on during my studies.',
    intro: 'Dates, roles, and the technologies I used on each project.',
  },
  projectArchive: [
    { date: '2025', project: 'Eira Bygg och Fix website', role: 'SEO & UX', techStack: 'SEO, UX Research, Content Design, HTML, CSS, JavaScript' },
  ],
  contact: {
    email: 'anna.lidvall@pm.me',
    github: 'https://github.com/AnnaLidvall',
    linkedin: 'https://www.linkedin.com/in/annalidvall',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
