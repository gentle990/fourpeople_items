import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/assets/font_53tutmyay99/iconfont.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}





app.use(pinia)
app.use(router)
app.use(ElementPlus,{
  locale: zhCn,
})

app.mount('#app')
