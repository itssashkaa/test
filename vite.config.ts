import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BASE_URL__: JSON.stringify('https://restcountries.com/v3.1/'),
  },
})
