import { z } from 'zod'

const envSchema = z.object({
  // Server
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'production']).default('development'),

  // Database
  DATABASE_URL: z.string(),

  // Redis
  REDIS_URL: z.string().url(),

  // URLs
  API_URL: z.string().url().default('http://localhost:3333'),
  WEB_URL: z.string().url().default('http://localhost:3000'),
})

export const env = envSchema.parse(process.env)
