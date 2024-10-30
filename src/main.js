import { createApp } from 'vue'
import App from './App.vue'
import store from './Store'; // Importing the Vuex store
import router from './router'

createApp(App)
.use(router)
.use(store) // Using the Vuex store
.mount('#app')
