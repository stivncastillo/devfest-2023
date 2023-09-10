import { z, defineCollection } from "astro:content";

const organizers = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const sponsors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const speakers = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = { organizers, sponsors, speakers };