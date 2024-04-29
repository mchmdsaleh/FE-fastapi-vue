import { createApp } from 'vue'
import axios from 'axios';

import App from './App.vue'
import router from './router'
import store from './store';

import './index.css'

createApp(App).use(router).use(store).mount('#app')

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend