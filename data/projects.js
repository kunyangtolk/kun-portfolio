// Content for the projects grid. Edit copy and links here — layout lives in
// components/Projects.jsx.
//
// Figma node 920:3934. Five cards: the compliance card leads the left column
// with the globe mark, the other four are numbered 02–05 down the right.
// Every tag now takes the lime wash and every numeral the cyan.

export const projects = [
  {
    id: "compliance",
    number: null,          // this card leads with the globe mark instead
    title: "Compliance reporting platform",
    tag: "SaaS",
    description: "A scalable approach to local content compliance",
    href: "/work/smp-reporting",
  },
  {
    id: "supplier-sourcing",
    number: "02",
    title: "Supplier sourcing platform",
    tag: "SaaS",
    description:
      "Unlock local business potential to fuel community transformation",
    href: "/work/smp-registration",
  },
  {
    id: "ai-policy",
    number: "03",
    title: "AI policy document analyzer",
    tag: "SaaS",
    description: "AI-powered insights for a fairer workplace",
    href: "/work/fairworx",
  },
  {
    id: "seven-research",
    number: "04",
    title: "Quant firm recruiting site redesign",
    tag: "Visual Design",
    description: "Supercharged by Claude",
    href: "/work/seven-research",
  },
  {
    id: "data-viz",
    number: "05",
    title: "Timeless Design Principles for Data Visualization",
    tag: "Perspective",
    description:
      "A book review of Edward Tufte’s “The Visual Display of Quantitative Information”",
    href: "https://www.perpetualny.com/blog/the-art-of-clarity-timeless-design-principles-for-data-visualization",
    external: true,
  },
];

export const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
