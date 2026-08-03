import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, writeFileSync } from 'node:fs';

const sitesWorker = () => ({
  name: 'sites-worker-entry',
  closeBundle() {
    mkdirSync('dist/server', { recursive: true });
    writeFileSync('dist/server/index.js', `export default { async fetch(request, env) {\n  const response = await env.ASSETS.fetch(request);\n  if (response.status !== 404) return response;\n  return env.ASSETS.fetch(new URL('/index.html', request.url));\n} };\n`);
  }
});

export default defineConfig({ plugins: [react(), sitesWorker()] });
