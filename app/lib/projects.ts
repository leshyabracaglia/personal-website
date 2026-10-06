export type ProjectLink = {
  label: string;
  url: string;
};

export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalDocument = {
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  github: string;
  links: ProjectLink[];
  images: string[];
  privacyPolicy: LegalDocument;
  termsOfService: LegalDocument;
};

const LAST_UPDATED = "2026-08-23";
const CONTACT_EMAIL = "leshyabracaglia@gmail.com";

export const PROJECTS: Project[] = [
  {
    slug: "beatboxd",
    title: "Beatboxd",
    tagline:
      "Letterboxd for DJ sets: log the DJs you've seen live, rate and review their sets, and follow friends to see theirs in your feed.",
    description:
      "Letterboxd for DJ sets — log the DJs you've seen live, rate them, write reviews, and follow other users to see their sets in your feed. Events link to real venues via Google Places, with event series, full-night lineups, and whole-night reviews. Built as a single Expo codebase for iOS and web, backed by a Go REST API with hand-written SQL on Postgres, Clerk auth, and an OpenAPI spec that generates the client's TypeScript types (enforced in CI). Infrastructure on AWS (EC2 + RDS) is provisioned with Terraform; the web app is deployed on Vercel.",
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "NativeWind",
      "Go",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "Clerk",
      "Vercel",
    ],
    github: "https://github.com/leshyabracaglia/dj-letterboxed",
    links: [
      {
        label: "Website",
        url: "https://www.beatboxd.com",
      },
    ],
    images: [],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Beatboxd is a social app for logging and reviewing DJ sets. This page explains what's collected and why.",
      ],
      sections: [
        {
          heading: "What's collected",
          body: [
            "Creating an account collects your email address and username via Clerk, the authentication provider. Using the app stores what you post — reviews, ratings, comments, likes, the events and venues you log, and who you follow.",
          ],
        },
        {
          heading: "What's public",
          body: [
            "Beatboxd is social by design: your profile, reviews, ratings, and comments are visible to other users, and your reviews appear in your followers' feeds.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "Your data isn't sold. It's shared only with the infrastructure that runs the app: Clerk (authentication), Amazon Web Services (API and database hosting), and Vercel (web hosting). Venue search is powered by Google Places, and DJ information may be looked up via Spotify.",
          ],
        },
        {
          heading: "Your control",
          body: [
            "Deleting your account removes your user record. For any other data requests, contact me directly.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "By creating an account or using Beatboxd, you agree to the following.",
      ],
      sections: [
        {
          heading: "Your content",
          body: [
            "You own the reviews and comments you post, and you're responsible for them. Don't post anything harassing, hateful, illegal, or that you don't have the rights to share. Content that breaks these rules may be removed, and accounts may be suspended.",
          ],
        },
        {
          heading: "As-is software",
          body: [
            "The app is provided \"as is,\" with no warranty of any kind, including around availability and data durability.",
          ],
        },
        {
          heading: "Not affiliated with Letterboxd",
          body: [
            "Beatboxd is an independent project and isn't affiliated with, endorsed by, or sponsored by Letterboxd.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "cookie-refuser",
    title: "Cookie Refuser",
    tagline:
      "A cross-platform browser extension that automatically denies cookie consent banners on Chrome, Firefox, and Safari.",
    description:
      "Inspired by the annoyance of continuing to dismiss cookie banners, Cookie Refuser is a cross-platform browser extension that automatically denies all cookie consent banners. Supports Chrome, Firefox, and Safari. Uses a three-tier detection strategy — known platform selectors, banner container scanning, and a broad fallback — along with MutationObserver for late-loading popups. Covers major consent platforms (OneTrust, Cookiebot, Quantcast, Didomi, and more) across 9 languages. Built with Manifest V3. Published on the Chrome Web Store, Firefox Add-ons, and the App Store.",
    technologies: ["JavaScript", "Manifest V3", "Xcode"],
    github: "https://github.com/leshyabracaglia/Cookie-refuser",
    links: [
      {
        label: "Chrome Extension",
        url: "https://chromewebstore.google.com/detail/cookie-refuser/mcglfjkmfeliffphgmihihlgehcfbkmi",
      },
      {
        label: "Firefox Extension",
        url: "https://addons.mozilla.org/en-US/firefox/addon/cookies-refuser/",
      },
      {
        label: "Safari Extension",
        url: "https://apps.apple.com/us/app/cookie-refuser/id6760318624?mt=12",
      },
    ],
    images: ["/projects/cookie-refuser-promotional-image.png"],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Cookie Refuser runs entirely inside your browser. It does not collect, transmit, or sell any personal data, browsing history, or the content of the pages you visit.",
      ],
      sections: [
        {
          heading: "What's stored locally",
          body: [
            "The extension keeps a couple of small pieces of state — whether it's enabled, and a count of banners it has denied — in your browser's local extension storage. That data stays on your device and is never sent anywhere.",
          ],
        },
        {
          heading: "Why it needs broad permissions",
          body: [
            "Cookie Refuser requests host permissions on the pages you visit so it can detect and click cookie-consent buttons as they appear. It only looks for consent-banner elements in the moment a page loads; it doesn't read, store, or transmit page content beyond that.",
          ],
        },
        {
          heading: "No analytics, no third parties",
          body: [
            "There are no analytics SDKs, trackers, or ad networks bundled with this extension.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Cookie Refuser is free, open-source software released under the MIT License. By installing or using it, you agree to the following.",
      ],
      sections: [
        {
          heading: "As-is software",
          body: [
            "The extension is provided \"as is,\" without warranty of any kind. Cookie-consent platforms change their markup often, so denial isn't guaranteed to work on every site, every time.",
          ],
        },
        {
          heading: "Source and license",
          body: [
            "The full source code is public on GitHub under the MIT License, which also governs your rights to use, copy, modify, and redistribute it.",
          ],
        },
        {
          heading: "Store terms",
          body: [
            "If you install Cookie Refuser via the Chrome Web Store, Firefox Add-ons, or the App Store, that platform's own terms also apply.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "canary-trap",
    title: "Canary Trap",
    tagline:
      "A browser extension that suggests a unique, trackable email alias for every site, so you know who leaks your email.",
    description:
      "A browser extension that suggests a unique, trackable email alias for every site you sign up on — using Gmail-style plus-addressing (yourname+sitename@gmail.com) — so that if spam starts showing up, you know exactly which company leaked or sold your address. Every fill is logged locally with the site, alias, first-seen date, use count, and last-used date, viewable in the popup with CSV export. Supports Chrome, Firefox, and Safari via Manifest V3.",
    technologies: ["JavaScript", "Manifest V3", "Xcode"],
    github: "https://github.com/leshyabracaglia/canary-trap",
    links: [
      {
        label: "Chrome Extension",
        url: "https://chromewebstore.google.com/detail/canary-trap/pcdbiafkjlgaelnekmpdemiadfgimpef",
      },
      {
        label: "Firefox Extension",
        url: "https://addons.mozilla.org/en-US/firefox/addon/canary-trap/",
      },
    ],
    images: [
      "/projects/canary-trap-promotional-image.png",
      "/projects/canary-trap-autofill.png",
      "/projects/canary-trap-settings.png",
    ],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Canary Trap does not collect, transmit, or store any personal data on any server. All data — your site log, aliases, and settings — is saved locally in your browser via chrome.storage.local and never leaves your device.",
      ],
      sections: [
        {
          heading: "What's stored locally",
          body: [
            "The extension keeps a log of the sites you've used it on, the alias suggested for each, and how often you've used it — purely as a convenience feature for you, stored only in local browser storage.",
          ],
        },
        {
          heading: "No analytics, no third parties",
          body: [
            "The extension does not use analytics, tracking, or third-party services of any kind.",
          ],
        },
        {
          heading: "Data we do not collect",
          body: [],
          list: [
            "Browsing history",
            "Email addresses, beyond what you type into forms you fill yourself",
            "Personally identifiable information",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Canary Trap is free software provided for personal use. By installing or using it, you agree to the following.",
      ],
      sections: [
        {
          heading: "As-is software",
          body: [
            "The extension is provided \"as is,\" without warranty of any kind. Not every company respects plus-addressing — some strip or reject it — so tagging isn't guaranteed to work on every site.",
          ],
        },
        {
          heading: "Source",
          body: [
            "The full source code is public on GitHub for review and self-hosting.",
          ],
        },
        {
          heading: "Store terms",
          body: [
            "If you install Canary Trap via a browser extension store, that platform's own terms also apply.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    tagline:
      "A personal portfolio site built with React, TypeScript, and Next.js, deployed on Vercel.",
    description:
      "You are here 😊 A personal site to showcase my work and projects. Built with React and TypeScript, deployed on Vercel with analytics and automatic deployments on every push to main.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/leshyabracaglia/personal-website",
    links: [],
    images: [],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "This site doesn't require an account and doesn't ask you to hand over personal information to browse it.",
      ],
      sections: [
        {
          heading: "Analytics",
          body: [
            "This site uses Vercel Web Analytics to understand aggregate traffic — things like which pages are visited and roughly where visitors come from. It doesn't use cookies and doesn't build a profile of individual visitors.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `If you email me directly at ${CONTACT_EMAIL} or reach out via GitHub or LinkedIn, I'll have whatever information you choose to share in that message. I use it only to respond to you.`,
          ],
        },
        {
          heading: "Hosting",
          body: [
            "This site is hosted on Vercel. Vercel's own privacy policy governs infrastructure-level data such as server logs.",
          ],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "This site is a personal portfolio provided for informational purposes. By using it, you agree to the following.",
      ],
      sections: [
        {
          heading: "Content",
          body: [
            "All content is provided \"as is,\" with no warranty of any kind, and may be updated or removed at any time without notice.",
          ],
        },
        {
          heading: "Third-party links",
          body: [
            "This site links out to other projects, apps, and services I've built or contributed to. I'm not responsible for the content, availability, or practices of those third-party destinations.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "1000-rejections",
    title: "1000 Rejections",
    tagline:
      "A React Native app that gamifies rejection exposure therapy and tracks your progress toward 1,000 rejections.",
    description:
      "A mobile app that gamifies rejection exposure therapy — users log rejections with titles, descriptions, dates, and photos while tracking progress toward 1,000 total rejections. Built with Supabase for auth and data, comprehensive unit and E2E testing via Maestro, and a CI/CD pipeline via EAS Build. Reframes failure as forward momentum.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Maestro",
      "EAS",
      "Claude",
      "Cursor",
    ],
    github: "https://github.com/leshyabracaglia/1000Rejections",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/rejection-tracker/id6758589418",
      },
    ],
    images: [
      "/projects/rejection-tracker-dashboard.png",
      "/projects/rejection-tracker-log.png",
      "/projects/rejection-tracker-edit.png",
    ],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "1000 Rejections uses Supabase for authentication and data storage. This page explains what's collected and why.",
      ],
      sections: [
        {
          heading: "What's collected",
          body: [
            "Creating an account collects your email address (via Supabase Auth). Using the app to log rejections stores whatever you enter — titles, descriptions, dates — plus any photo you optionally attach.",
          ],
        },
        {
          heading: "How it's used",
          body: [
            "This data powers the app's own features: your rejection log and progress toward the 1,000 goal. It isn't sold, and it isn't shared with third parties beyond Supabase, the infrastructure provider that hosts the database and file storage.",
          ],
        },
        {
          heading: "Your control",
          body: [
            "You can delete individual entries or your account's data by contacting me directly, since the app doesn't yet expose self-service deletion in the UI.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "1000 Rejections is open-source software released under the MIT License. By creating an account or using the app, you agree to the following.",
      ],
      sections: [
        {
          heading: "Your content",
          body: [
            "You own whatever you log in the app — titles, descriptions, and photos. You're responsible for what you submit, and you shouldn't upload anything you don't have the rights to share.",
          ],
        },
        {
          heading: "As-is software",
          body: [
            "The app is provided \"as is,\" with no warranty of any kind, including around data durability. Back up anything you'd be upset to lose.",
          ],
        },
        {
          heading: "Source and license",
          body: [
            "The full source code is public on GitHub under the MIT License, which also governs your rights to use, copy, modify, and redistribute it.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "qtpi-token",
    title: "qtPI Token",
    tagline:
      "A mintable ERC-20 token built with Hardhat and OpenZeppelin, deployed on Ethereum's Sepolia testnet.",
    description:
      "A mintable ERC-20 token (QTPI) built with Hardhat and OpenZeppelin, deployed on Ethereum's Sepolia testnet. Implements peer-to-peer transfers and admin minting on top of a 1 million token initial supply. Leverages OpenZeppelin's battle-tested contract libraries for security. The deployed contract is publicly verifiable on-chain and importable directly into MetaMask.",
    technologies: ["Solidity", "JavaScript", "Hardhat", "OpenZeppelin", "Ethereum"],
    github: "https://github.com/leshyabracaglia/smart-contract",
    links: [
      {
        label: "Etherscan",
        url: "https://sepolia.etherscan.io/address/0xcfB8035a88DE1b5fdc89242169c8c2f62c1656EE",
      },
    ],
    images: [],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "qtPI Token is a smart contract, not a hosted app or service — there's no server here collecting your data.",
      ],
      sections: [
        {
          heading: "On-chain interactions",
          body: [
            "Any interaction with the QTPI contract (transfers, minting) happens directly between your own wallet and the Ethereum Sepolia testnet, through a wallet client like MetaMask that you control. Those transactions are recorded on the public blockchain, which is inherently public and pseudonymous by design — that's a property of Ethereum itself, not something this project adds.",
          ],
        },
        {
          heading: "What this project doesn't collect",
          body: [
            "There's no off-chain database, analytics, or tracking associated with the contract itself.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "qtPI Token (QTPI) is experimental, educational software deployed to Ethereum's Sepolia testnet. By interacting with the contract, you agree to the following.",
      ],
      sections: [
        {
          heading: "Testnet only, no monetary value",
          body: [
            "QTPI is deployed on a public testnet for demonstration purposes. It has no monetary value and isn't an investment, security, or offer of either.",
          ],
        },
        {
          heading: "Admin minting",
          body: [
            "The contract includes an admin-controlled minting function on top of the initial supply, as disclosed in the project README. Token supply is not fixed.",
          ],
        },
        {
          heading: "As-is software",
          body: [
            "The contract and its source code are provided \"as is,\" with no warranty of any kind. Interact with it at your own risk, as with any smart contract.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
  {
    slug: "little-alchemy-companion",
    title: "Little Alchemy Companion",
    tagline:
      "A React Native reference guide for Little Alchemy 2, covering 720+ elements and crafting recipes.",
    description:
      "A React Native mobile app serving as a complete reference guide for Little Alchemy 2 — featuring a searchable catalog of 720+ elements, crafting recipe lookup, and reverse ingredient search. Includes an automated web scraper that pulls element data and icons directly from the game's wiki to keep the database current.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Claude",
      "Cursor",
    ],
    github: "https://github.com/leshyabracaglia/little-alchemy-companion",
    links: [],
    images: [],
    privacyPolicy: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Little Alchemy Companion is an offline reference app. It doesn't have accounts, and it doesn't collect or transmit any personal data.",
      ],
      sections: [
        {
          heading: "No accounts, no network calls",
          body: [
            "All element, recipe, and icon data ships bundled with the app, generated ahead of time by a scraper the developer runs — not at runtime on your device. The app itself makes no network requests and has nothing to send even if it wanted to.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
    termsOfService: {
      lastUpdated: LAST_UPDATED,
      intro: [
        "Little Alchemy Companion is a fan-made, open-source reference app released under the MIT License. By using it, you agree to the following.",
      ],
      sections: [
        {
          heading: "Not affiliated with Little Alchemy",
          body: [
            "This is an unofficial fan project. Little Alchemy 2 is a trademark of Recloak, and this app isn't affiliated with, endorsed by, or sponsored by Recloak. Element data is sourced from the Little Alchemy 2 wiki for reference purposes.",
          ],
        },
        {
          heading: "As-is software",
          body: [
            "The app is provided \"as is,\" with no warranty of any kind, including around the accuracy of scraped element data.",
          ],
        },
        {
          heading: "Source and license",
          body: [
            "The full source code is public on GitHub under the MIT License, which also governs your rights to use, copy, modify, and redistribute it.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Reach me at ${CONTACT_EMAIL}.`],
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
