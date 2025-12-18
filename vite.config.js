import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        // We are building a library, not a SPA
        lib: {
            entry: {
                core: resolve(__dirname, 'src/aviant.core.scss'),
                studio: resolve(__dirname, 'src/aviant.studio.scss'),
                canvas: resolve(__dirname, 'src/aviant.canvas.scss'),
            },
            name: 'AviantSkin',
        },
        rollupOptions: {
            // Ensure we don't bundle dependencies if we had JS
            external: [],
            output: {
                // Output CSS files with clear names
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'aviant.css';
                    return assetInfo.name;
                },
            },
        },
        // Minify CSS for production
        cssMinify: 'lightningcss',
    },
    css: {
        devSourcemap: true, // Easier debugging
        preprocessorOptions: {
            scss: {
                // Modern Sass API
                api: 'modern-compiler',
            },
        },
    },
});