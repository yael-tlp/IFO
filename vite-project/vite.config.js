import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),], preview: {
        allowedHosts: ['ifo.onrender.com']
    },
    server: {
        host: true,
        strictPort: true,
        port: 8000,
    },
})
