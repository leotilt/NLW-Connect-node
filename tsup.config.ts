import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/server.ts',
    'src/env.ts',
    'src/routes/**/*.ts',
    'src/functions/**/*.ts',
    'src/drizzle/client.ts',
    'src/drizzle/schema/**/*.ts',
    'src/redis/**/*.ts'
  ],
  clean: true,
  format: 'esm',
  outDir: 'dist',
  noExternal: ['drizzle-orm'],
})
