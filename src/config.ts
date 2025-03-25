import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  JWT_SECRET: z.string().min(8),
  PORT: z.string().default('3000'),
  MONGODB_URI: z.string(),
//   NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('Invalid environment variables:', env.error.format());
  process.exit(1);
}

export const config = {
  JWT_PASSWORD: env.data.JWT_SECRET,
  PORT: env.data.PORT,
  MONGODB_URI: env.data.MONGODB_URI,
//   NODE_ENV: env.data.NODE_ENV
} as const;