export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Heidi Albarazi",
  description: "Chat with me to find out who I am!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Hackathons",
      href: "/hackathons",
    },
    {
      label: "Chat",
      href: "/chat",
    },
    {
      label: "Career",
      href: "/career",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/wedalb",
    twitter: "https://twitter.com/hero_ui",
    docs: "/chat",
    discord: "https://discord.gg/wedalb",
    instagram: "https://www.instagram.com/drawingonpluto",
    youtube: "https://www.youtube.com/embed/",
    devpost: "https://devpost.com/wedalb",
  },
};
