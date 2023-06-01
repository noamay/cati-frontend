import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/home-page.vue';
import About from './views/about-page.vue';


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;
