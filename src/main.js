import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* ---------- TO DO ---------- */
import { createRouter, createWebHistory } from 'vue-router'

import Weather from "./components/Weather.vue";
import Map from "./components/Map.vue";
import About from './components/About.vue';

const routes = [
    { path: '/weather', component: Weather},
    { path: '/map', component: Map},
    { path: '/about', component: About},
    { path: '', component: Weather},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
