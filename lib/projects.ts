export type ProjectStatus = "In beta" | "Shipped" | "In progress";

export type StackGroup = {
  /** e.g. "Client", "Backend", "AI" — keeps long stacks readable. */
  group: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/** A decision worth explaining: what was hard, what I did, what it cost. */
export type Decision = {
  title: string;
  problem: string;
  approach: string;
  tradeoff: string;
};

export type CaseStudy = {
  /** Opening paragraph on the detail page, longer than the card summary. */
  intro: string;
  decisions: Decision[];
  next: string[];
};

export type Project = {
  slug: string;
  name: string;
  /** One line for cards and page headers. */
  tagline: string;
  /** Two or three sentences, plain language, no jargon. */
  summary: string;
  role: string;
  status: ProjectStatus;
  period: string;
  platforms: string[];
  stack: StackGroup[];
  metrics?: Metric[];
  /**
   * Engineering notes for projects without a case study. A project with a
   * `caseStudy` renders its decisions instead, so don't write both.
   */
  highlights?: string[];
  links: ProjectLink[];
  screenshots?: Screenshot[];
  /** Only the headline project carries a full case study. */
  caseStudy?: CaseStudy;
  /** Featured projects lead the homepage and the work index. */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "mygarden",
    name: "MyGarden",
    tagline: "A plant care app whose reminders read the weather",
    summary:
      "An iOS and Android app for keeping plants alive. Search a catalogue of a few hundred thousand species, or photograph something you can't name, and each plant you add gets its own watering, feeding and pruning schedule. A job runs once a day against your local forecast and moves the watering reminders: later after rain, sooner in a heatwave.",
    role: "Solo. Design, app, backend, release.",
    status: "In beta",
    period: "May 2026 – present",
    platforms: ["iOS", "Android"],
    stack: [
      {
        group: "Client",
        items: ["React Native", "Expo", "TypeScript", "Expo Router", "NativeWind"],
      },
      {
        group: "Backend",
        items: ["Postgres", "Row-level security", "Supabase Auth", "Storage", "Realtime", "pg_cron"],
      },
      {
        group: "Services",
        items: ["Deno Edge Functions", "Claude Haiku", "RevenueCat", "Expo Push"],
      },
    ],
    metrics: [
      { label: "Releases", value: "15" },
      { label: "Commits", value: "195" },
      { label: "Migrations", value: "33" },
      { label: "Edge Functions", value: "10" },
    ],
    // TODO: add the TestFlight public link
    links: [],
    screenshots: [
      {
        src: "/work/mygarden/growing-calendar.png",
        alt: "The growing calendar for July, listing jobs grouped by task",
        caption:
          "The growing calendar. Every window is worked out from the user's own frost dates, so a mild coastal garden and a colder inland one see different months. It all inverts in the southern hemisphere.",
        width: 1206,
        height: 2622,
      },
      // TODO (Rory): drop more screenshots in public/work/mygarden/ and add
      // them here. Today, Discover with filters, a plant care guide, the
      // garden card with the sun path, and the wildlife tracker.
    ],
    caseStudy: {
      intro:
        "MyGarden is a plant care app for iOS and Android. You add plants by searching the catalogue or photographing something you can't name, and each one gets its own watering, feeding and pruning schedule. Point the camera at a sickly plant and it'll tell you what's likely wrong with it. A journal keeps the photos so you can see how something's done over a season.",
      decisions: [
        {
          title: "The catalogue grows itself",
          problem:
            "A plant app needs hundreds of thousands of species. Paying a horticultural API per request doesn't survive contact with a free tier, and generating care guides for every species up front means writing a lot that nobody opens.",
          approach:
            "The catalogue is seeded from open taxonomy data and fills in as people use it. A species enters Postgres the first time someone searches for it, with photos from iNaturalist and Wikipedia as a backup. Its care guide is generated once on first open and cached from then on, so the second person to look at that plant waits for nothing. The core guide comes back fast; the extras (flowering windows, deadheading, common problems) arrive a moment later over Realtime.",
          tradeoff:
            "The first person to open an obscure species waits a few seconds. After that it's instant for everyone. I run a script before each release that pre-generates guides for the popular plants, so most people never hit the wait at all.",
        },
        {
          title: "Reminders that read the weather",
          problem:
            "v1 turned a catalogue field into a fixed interval: water every 2, 5 or 10 days. That interval is blind to conditions. It tells you to water during a downpour and leaves a plant dry through a heatwave. Reminders that are visibly wrong teach people to ignore the rest.",
          approach:
            "A daily job reads the local forecast from Open-Meteo and moves each outdoor plant's next watering: sooner in heat, later or skipped after rain. Rain only counts if it actually fell in the last 24 hours or is forecast within 48, so a skip never rests on a forecast alone. A hot day is worked out per location, from the 90th percentile of that garden's own daily highs over the past year. 22°C is a hot day in Scotland and it isn't in Spain.",
          tradeoff:
            "Every adjustment is capped at a day or two and has to be explainable in one line. An evapotranspiration model would schedule better, but it can't tell you why your reminder moved. Open-Meteo is free and needs no key, so the whole thing costs nothing per user to run.",
        },
        {
          title: "Two cron jobs that must not overtake each other",
          problem:
            "The weather pass and the notification pass share state. If reminders go out before the weather has adjusted them, someone gets told to water their garden in the rain.",
          approach:
            "Both jobs run hourly and handle each user in their own notification hour, on deliberately different ticks: the weather pass on the hour, notifications half an hour behind it. A skipped watering gets flagged so the user hears about it once and is then left alone, and the flag clears when the next watering is scheduled.",
          tradeoff:
            "Nothing in the code enforces that ordering, so it's written down in the repo next to the migrations that set it. The first version ran the weather job once a day at a fixed UTC hour, which was simpler but meant a user in New Zealand got yesterday's forecast.",
        },
        {
          title: "Knowing where not to put an LLM",
          problem:
            "Four features in the app use Claude: identifying a plant from a photo, diagnosing a sick one, writing care guides, and search. The obvious next step is having it write the toxicity warnings too, since the model plainly knows which plants are poisonous.",
          approach:
            "Toxicity warnings come from the HTA Guide to Potentially Harmful Plants. A plant carries a warning if that book lists it, and stays quiet if it doesn't.",
          tradeoff:
            "Coverage is narrower than a model would give, and some genuinely harmful plants carry no warning because the book doesn't list them. I'm fine with that. A model will tell you a plant is safe in exactly the same confident tone it uses when it's right, and under-warning is the mistake I can live with.",
        },
      ],
      next: [
        "Evapotranspiration-based watering, scheduling on how much water a plant is actually losing. The data model was built for it.",
        "Per-plant microclimate tuning, so a sheltered corner and an exposed bed stop sharing a schedule.",
        "Reading push receipts back from Expo to prune dead notification tokens.",
      ],
    },
    featured: true,
  },
  {
    slug: "osrs-discord-bot",
    name: "OSRS Discord Bot",
    tagline: "Stats, prices and wiki-backed answers for a RuneScape clan",
    summary:
      "A Discord bot for an Old School RuneScape clan. It pulls account stats and Grand Exchange prices, tracks skill gains and clan competitions, and fires price alerts on a schedule. Ask it a gameplay question and it reads the official wiki before it answers.",
    role: "Solo.",
    status: "Shipped",
    period: "2026",
    platforms: ["Discord"],
    stack: [
      {
        group: "Bot",
        items: ["TypeScript", "Node", "discord.js", "zod"],
      },
      {
        group: "Data",
        items: ["Postgres", "Drizzle ORM"],
      },
      {
        group: "Services",
        items: ["Claude", "OSRS Wiki", "Canvas rendering"],
      },
    ],
    highlights: [
      "Wiki pages go into the prompt before the model answers, so drop rates and quest requirements come from the game's own documentation.",
      "Stats, boss kills, clue counts and skill gains come back as image cards rendered server-side.",
      "Price alerts and reminders run on their own schedulers, backed by Postgres through Drizzle, so a restart doesn't lose them.",
      "17 slash commands, each one file behind a shared Command interface, so adding one touches nothing else.",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "charlies-runner",
    name: "Charlie's Runner",
    tagline: "A three-lane runner for a three-year-old, with no way to lose",
    summary:
      "An iPad web app that works offline, built for a three-year-old. Hit an obstacle and it bounces away and slows you down for a second. There's no game over. The character is drawn in code and the music is generated live in the browser.",
    role: "Solo.",
    status: "Shipped",
    period: "2026",
    platforms: ["iPad", "Web"],
    stack: [
      {
        group: "Game",
        items: ["Phaser 3", "TypeScript", "WebAudio"],
      },
      {
        group: "Build",
        items: ["Vite", "PWA / service worker", "GitHub Pages"],
      },
    ],
    highlights: [
      "Installs to the iPad home screen and keeps working in airplane mode.",
      "Five themed islands all read from a single THEMES array. Level select, generated textures, the obstacle spawner and the music key all derive from it, so adding a level means adding one object.",
      "Every design decision came from watching a three-year-old play it. The exit button ignores a plain tap because he kept quitting by accident.",
    ],
    links: [],
    featured: false,
  },
  {
    slug: "budget-planner",
    name: "Budget Planner",
    tagline: "Household income and spending, tracked",
    summary:
      "A small React tool for tracking income and outgoings, with CSV import for bank statements and a household view for splitting shared costs.",
    role: "Solo.",
    status: "Shipped",
    period: "June 2026",
    platforms: ["Web"],
    stack: [
      {
        group: "App",
        items: ["React", "Vite", "Tailwind CSS"],
      },
      {
        group: "Data",
        items: ["Supabase", "Papa Parse", "date-fns"],
      },
    ],
    highlights: [
      "CSV import parses real bank exports in the browser, so statement data stays on the user's machine until they've looked at it.",
    ],
    links: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
