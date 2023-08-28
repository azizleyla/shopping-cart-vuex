import { createApp } from 'vue'
import './assets/style.css'
import 'primeicons/primeicons.css';
import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';

import App from './App.vue'
import router from './router';
import store from './store';


const app = createApp(App);
app.use(router)
app.use(Vue3Toastify, {
    autoClose: 3000,
  })
app.use(store)
app.mount('#app')
