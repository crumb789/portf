import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import SecApp from './Sec-Main.vue'


createApp(App).use(store).use(router).mount('#app')

createApp(SecApp).use(store).use(router).mount('#sec-app')









