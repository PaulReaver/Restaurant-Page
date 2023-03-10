// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        base: '/docs/',
        outDir: 'docs',
    },
});
