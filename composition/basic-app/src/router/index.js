import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/Profile.vue';
import Service from '../views/SinglePage.vue';


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/service/:id', name: 'service', component: Service },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;