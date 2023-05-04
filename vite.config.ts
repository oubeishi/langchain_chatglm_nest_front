/*
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-23 19:54:23
 * @LastEditTime: 2022-09-25 19:09:11
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://github.com/antfu/unplugin-auto-import
/**
 * 不用自己引入ref,onMounted等
 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: './config/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './config/.eslintrc-auto-import.json'
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: './config/components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    vueJsx()
  ], // 配置项目别名
  resolve: {
    alias: [
      {
        find: 'ddkjonduty/src', // 别名
        replacement: resolve(__dirname, 'src') // 别名对应地址
      },
      {
        find: '@/',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    outDir: 'onduty-vue',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  define: {
    'process.env': {
      USAGE: process.env.USAGE
    }
  },
  server: {
    host: '0.0.0.0',
    // https: false, // 是否启用 http 2
    cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
    // open: true, // 服务启动时自动在浏览器中打开应用
    port: 8001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})
