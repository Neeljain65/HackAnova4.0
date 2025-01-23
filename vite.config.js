import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HackAnova4.0/'  , // Replace <repository-name> with your GitHub repository name
});
