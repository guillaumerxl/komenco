import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import useVuePlugin from '@vitejs/plugin-vue'
import useRequireContextPlugin from '@originjs/vite-plugin-require-context'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
    },

    plugins: [
      useVuePlugin(),
      useRequireContextPlugin(),
    ],
  
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@style': fileURLToPath(new URL('./src/style', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
      },
  
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
  }
})
