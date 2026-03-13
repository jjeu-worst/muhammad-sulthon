import { useQuery } from "@tanstack/react-query";

// Static mock data for the portfolio
const PORTFOLIO_DATA = {
  about: {
    bio: "I'm a passionate full-stack developer specializing in building exceptional digital experiences. With a strong foundation in both front-end aesthetics and back-end architecture, I bridge the gap between design and technical implementation.",
    skills: [
      "React", "TypeScript", "Node.js", "Next.js", 
      "Flutter", "Tailwind CSS", "PostgreSQL", "Framer Motion",
      "GraphQL", "Docker"
    ]
  },
  projects: [
    {
      id: "1",
      title: "Fintech Dashboard",
      description: "A comprehensive analytics dashboard for financial institutions featuring real-time data visualization and secure transaction processing.",
      tags: ["React", "TypeScript", "Recharts", "Node.js"],
      link: "#"
    },
    {
      id: "2",
      title: "E-Commerce Mobile App",
      description: "A cross-platform mobile application for a premium retail brand with seamless checkout, augmented reality try-ons, and offline support.",
      tags: ["Flutter", "Firebase", "Stripe API"],
      link: "#"
    },
    {
      id: "3",
      title: "AI Writing Assistant",
      description: "A collaborative text editor powered by large language models, helping content creators generate, edit, and refine their work.",
      tags: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
      link: "#"
    },
    {
      id: "4",
      title: "Design System UI",
      description: "An open-source component library focusing on accessibility, customizable themes, and developer experience.",
      tags: ["React", "Storybook", "Radix UI"],
      link: "#"
    }
  ]
};

export function usePortfolioData() {
  return useQuery({
    queryKey: ["portfolio-data"],
    queryFn: async () => {
      // Simulate slight network delay for realism
      await new Promise((resolve) => setTimeout(resolve, 400));
      return PORTFOLIO_DATA;
    },
    staleTime: Infinity, // Data never goes stale
  });
}
