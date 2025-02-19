import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Steven Lam",
  EMAIL: "e2czrow4v@mozmail.com",
  lightAndDarkMode: true,
  favicon: {
    default: "/fav/favicon.ico"
  }
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My portfolio",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My experience and work history",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "My personal projects",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/steven-lm"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/stevenlam1",
  }
];
