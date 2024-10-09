import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



const root = resolve(__dirname, '.')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        information: resolve(root, 'Casa_Mexicali', 'index.html'),
        information2: resolve(root, 'Coobowie_Waters', 'index.html'),
        information3: resolve(root, 'Main_River_Magic', 'index.html'),
        information4: resolve(root, 'Coral_Sands', 'index.html'),
        information5: resolve(root, 'The_Lotus', 'index.html'),
        information6: resolve(root, 'Haven_On_Holland', 'index.html'),
        information7: resolve(root, 'Contact_Us', 'index.html'),
        downloads: resolve(root, 'downloads', 'index.html'),
        success: resolve(root, 'success', 'index.html'),
        declined: resolve(root, 'declined', 'index.html'),
        dashboard: resolve(root, 'dashboard', 'index.html'),
        listings: resolve(root, 'listings', 'index.html'),
      }
    }
  }
  
})
