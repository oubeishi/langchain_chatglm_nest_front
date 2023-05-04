import App from '@/App.vue'
import '@/assets/style/preflight.css'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Component, createApp } from 'vue'

const bootstrap = (): void => {
  const app = createApp(App as Component)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}
bootstrap()
