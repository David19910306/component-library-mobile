import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from "unplugin-element-plus/vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 资源路径(相对路径) 默认是绝对路径(没有.)
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"), 
    }
  }
})
