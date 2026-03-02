import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  })
});

export const collections = {
  'case-studies': caseStudies,
};