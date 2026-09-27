import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({// This is the Vite configuration file. It defines the settings for the Vite build tool, including plugins and other options.
  plugins: [react()],
})
