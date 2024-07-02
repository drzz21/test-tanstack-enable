import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@tanstack/vue-query'],
  },
  plugins: [vue()],
})
