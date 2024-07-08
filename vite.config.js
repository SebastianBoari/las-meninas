/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@fb': resolve(__dirname, 'src/firebase'),
      '@services': resolve(__dirname, 'src/firebase/services'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@env': resolve(__dirname, 'src/env.js'),
      '@context': resolve(__dirname, 'src/context'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@routes': resolve(__dirname, 'src/routes'),
    },
  },
})
