import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows binding to all interfaces (0.0.0.0)
    port: 4173, // specify the port if necessary
  },
});
