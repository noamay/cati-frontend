import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/store';

const app = createApp(App)
app.use(router);
app.use(store);
// app.config.productionTip = false;
app.mount('#app');