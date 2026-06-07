export type Project = {
  name: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Garden App",
    description:
      "A web app for planning and keeping track of a garden. Built with TypeScript and styled with Tailwind, with Supabase handling data and Resend sending transactional emails.",
    tech: ["TypeScript", "Tailwind CSS", "Supabase", "Resend"],
  },
  {
    name: "Budget Planner",
    description:
      "A tool for tracking income and spending. A React front end backed by Supabase, with email-based authentication powered by Resend.",
    tech: ["React", "Supabase", "Resend"],
  },
];
