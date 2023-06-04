import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/store';
import WebSocketService from "@/services/webSocketService";

const webSocket = new WebSocketService();
const app = createApp(App)

app.use(router);
app.use(store);
app.config.globalProperties.$webSocket = webSocket;
// app.config.productionTip = false;
app.mount('#app');