import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        //scssファイルの読み込み
        scss: {
          additionalData: `@use "src/css/reset.scss" as *;`
        }
      }
    }
  }
});
