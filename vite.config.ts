import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Content Security Policy for the production build. It only allows scripts from
// this site and Calendly, so injected or third-party code cannot load anything
// else. Delivered as a <meta> tag so it works on any static host; the dev
// server is excluded because hot reload relies on inline scripts.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.calendly.com",
  "frame-src https://calendly.com https://*.calendly.com",
  "connect-src 'self' https://calendly.com https://*.calendly.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

function contentSecurityPolicyMeta(): Plugin {
  return {
    name: 'content-security-policy-meta',
    apply: 'build',
    transformIndexHtml: () => [
      {
        tag: 'meta',
        attrs: { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy },
        injectTo: 'head-prepend',
      },
    ],
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    contentSecurityPolicyMeta(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
