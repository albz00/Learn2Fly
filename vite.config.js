import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

/** Preserve fetchpriority on Vite-generated entry assets after build. */
function fetchPriorityHints() {
  return {
    name: 'fetch-priority-hints',
    transformIndexHtml(html) {
      return html
        .replace(
          /<script type="module" crossorigin src="([^"]+)"><\/script>/,
          '<script type="module" crossorigin src="$1" fetchpriority="high"></script>',
        )
        .replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/,
          '<link rel="stylesheet" crossorigin href="$1" fetchpriority="high">',
        )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss(), fetchPriorityHints()],
  server: {
    open: true,
  },
})
