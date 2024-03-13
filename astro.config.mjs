import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        //scssファイルの読み込み
        scss: {
          additionalData: `
          @use "src/css/reset.scss" as *;
          @import "src/css/tailwind.scss";
          `
        }
      }
    }
  },
  integrations: [react(), tailwind()]
});
