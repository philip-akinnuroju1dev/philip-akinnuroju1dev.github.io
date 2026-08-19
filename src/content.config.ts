import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/projects',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		status: z.string().default('Completed'),
	}),
});

const labs = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/labs',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		date: z.coerce.date(),
		level: z.string().default('Beginner'),
		status: z.string().default('Completed'),
		tags: z.array(z.string()).default([]),
	}),
});

const research = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/research',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.string(),
		date: z.coerce.date(),
		status: z.string().default('In Progress'),
		tags: z.array(z.string()).default([]),
	}),
});

const journals = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/journals',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = {
	projects,
	labs,
    research,
    journals,
};
