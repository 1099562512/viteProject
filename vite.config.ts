import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { presetTypography, presetUno } from 'unocss'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCss({
    presets: [presetUno(), presetTypography()]
  })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@u": resolve(__dirname, "src/utils")
    },
    extensions: ['.js', '.ts', '.vue'],
  },
  server: {
    host: "localhost",
    port: 8090
  }
})
