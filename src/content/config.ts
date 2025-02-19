import { defineCollection, z } from "astro:content";


const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    companyUrl: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    demoText: z.string().optional(),
    repoURL: z.string().optional(),
    repoText: z.string().optional()
  }),
});

export const collections = { work, projects };
