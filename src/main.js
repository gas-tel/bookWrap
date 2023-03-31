import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'es6-promise/auto'

const app = createApp(App)
app.use(router).use(store).mount('#app')

app.config.globalProperties.$filters = {
  makeComma(value) {
    return value.toLocaleString('ko-KR')
  }
}