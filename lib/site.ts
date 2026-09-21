/**
 * Single source of truth for anything that appears in more than one place:
 * metadata, the footer, structured data, the OG card.
 */
export const site = {
  name: "Rory Walker",
  url: "https://rorywalker.dev",
  email: "hello@rorywalker.dev",
  role: "Developer",
  description:
    "Rory Walker builds apps on his own and ships them. A plant care app for iOS and Android, a Discord bot for a RuneScape clan, and a few smaller tools.",
  github: "https://github.com/Turkeyt00th",
  // TODO: add once confirmed
  linkedin: "",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
