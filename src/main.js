import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
/* 
import Weather from './components/Weather.vue'
import Map from './components/Map.vue'
import About from './components/About.vue'
import Users from './components/Users.vue'
import UserInfo from './components/UserInfo.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
import UserContact from './components/UserContact.vue'

const routes = [
    { path: '/', component: Weather},
    { path: '/weather', component: Weather},
    { path: '/map', component: Map},
    { path: '/about', component: About},
    { path: '/users', component: Users},
]
*/
/*
    { 
        path: '/user/:id', 
        component: UserInfo,
        children: [
            { path: '', component: UserProfile},
            { path: 'profile', component: UserProfile},
            { path: 'posts', component: UserPosts },
            { path: 'contact', component: UserContact },
        ]
    }
]
*/

createApp(App).mount('#app')
