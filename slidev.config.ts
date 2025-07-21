import { defineConfig } from 'slidev'

export default defineConfig({
  build: {
    ssr: false,
  },
  vite: {
    base: process.env.NODE_ENV === 'production' ? '/slidev-theme-oqtopus/' : '/',
  },
})
