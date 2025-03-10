import type {OpenApiSpecsOptions} from "hono-openapi";

export const openAPIOptions = {
  documentation: {
    info: {
      title: 'Hono API',
        version: '1.0.0',
        description: 'Greeting API',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local Server' },
    ],
  },
} satisfies OpenApiSpecsOptions
