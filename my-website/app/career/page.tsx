import React from "react";

import { Timeline } from "@/components/ui/timeline";

export default function CareerPage() {
  const data = [
    {
      title: "Hackathon Mentor",
      year: "Mar 2025 - Now",
      company: {
        name: "Masterschool",
        logo: "https://cdn-1.webcatalog.io/catalog/masterschool/masterschool-icon-filled-256.png?v=1714781169632",
      },
      description: "Supports students of masterschool with their hackathon experience.\n" +
          "            Support with code and questions.",
    },
    {
      title: "Career Mentor",
      year: "Mar 2025 - Now",
      company: {
        name: "Masterschool",
        logo: "https://cdn-1.webcatalog.io/catalog/masterschool/masterschool-icon-filled-256.png?v=1714781169632",
      },
      description: "Conduct Mock Interviews with masterschool computer science students\n" +
          "            to evaluate their skill level and needed support.",
    },
    {
      title: "UI/UX Designer in Intrapreneurship",
      year: "Mar 2025 - Now",
      company: {
        name: "Siemens",
        logo: "https://images.icon-icons.com/2699/PNG/512/siemens_logo_icon_170741.png",
      },
      description: "UI/UX Design in innovation management. Create websites for innovation\n" +
          "          campagnes and hackathons.",
    },
    {
      title: "Software Engineering Research Intern",
      year: "Jun 2024 - Oct 2024",
      company: {
        name: "Jetbrains",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/JetBrains_beam_logo.svg/2048px-JetBrains_beam_logo.svg.png",
      },
      description: "Created a learning platform using svelte to help students learn\n" +
          "          programming concepts using ai agents.",
    },
    {
      title: "Campus Ambassador",
      year: "Aug 2023 - Oct 2024",
      company: {
        name: "Jetbrains",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/JetBrains_beam_logo.svg/2048px-JetBrains_beam_logo.svg.png",
      },
      description: "Represent jetbrains at hackathons. Organize events.",
    },
    {
      title: "UI/UX Designer",
      year: "Jun 2022 - Aug 2023",
      company: {
        name: "Toowoxx",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wPUAUZLSH9rLo_WDny_8c0bxgu5ljJx0OQ&s",
      },
      description: "Create UI/UX Design as a consultant and make them for other companies.",
    },
    {
      title: "UI/UX Designer",
      year: "Jan 2022 - now",
      company: {
        name: "Freelancing",
      },
      description: "Create UI/UX Designs using Figma for clients.",
    },
    {
      title: "Research Assistant in IT",
      year: "Oct 2020 - May 2022",
      company: {
        name: "LMU Melessa",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6IoiJmEif9riJqMCoqjyjFioqJTgp_z06Q&s",

      },
      description:"Help with organizing the Office and the computers.",
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
