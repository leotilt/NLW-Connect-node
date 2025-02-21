import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/server.ts',
    'src/routes/**/*.ts',
    'src/functions/**/*.ts',
    'src/drizzle/**/*.ts',
    'src/redis/**/*.ts',
  ],
  clean: true,
  format: 'esm',
  outDir: 'dist',
  noExternal: ['drizzle-orm'],
})
