import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  })
});

const writingSamples = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    type: z.string().optional(),
    order: z.number(),
  })
});

export const collections = {
  'case-studies': caseStudies,
  'writing-samples': writingSamples,
};