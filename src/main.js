import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'es6-promise/auto'

const app = createApp(App).use(router).use(store).mount('#app')

console.log(app);