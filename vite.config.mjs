import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  base: '/test', // Sets the base URL of your app
  define: {
    global: 'window'
  },
  server: {
    open: true, // Automatically opens the browser
    port: 3000, // Sets the dev server port to 3000
    historyApiFallback: true, // Ensures unmatched routes fall back to index.html
  },
  preview: {
    open: true, // Automatically opens the browser for preview
    port: 3000, // Sets the preview server port to 3000
  },
  resolve: {
    // Aliases can be uncommented and adjusted if necessary
    // alias: [
    //   {
    //     find: /^~(.+)/,
    //     replacement: path.join(process.cwd(), 'node_modules/$1')
    //   },
    //   {
    //     find: /^src(.+)/,
    //     replacement: path.join(process.cwd(), 'src/$1')
    //   }
    // ]
  }
});
