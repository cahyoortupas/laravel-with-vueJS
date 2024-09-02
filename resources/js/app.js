require('./bootstrap');

import { createApp } from 'vue';
import router from './router/router'
import App from './components/App'
import store from './store/store'

createApp(App).use(router).use(store).mount("#app")