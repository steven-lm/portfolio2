export type Site = {
  NAME: string;
  EMAIL: string;
  lightAndDarkMode: boolean;
  favicon: {
    default: string;
  };
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
