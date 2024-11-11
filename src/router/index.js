import { createRouter, createWebHistory } from 'vue-router';

// Import components
import LoginPage from '../components/login.vue'; 
import HomePage from '../components/home.vue'; 
import AboutPage from '../components/about.vue';
import MenuPage from '../components/menu.vue'; 
import postManagement from '../components/post.vue'; 
import ContactPage from '../components/contact.vue'; 
import BookingPage from '../components/events.vue'; 
import ChefsPage from '../components/chefs.vue';
import SinglePage from '../components/book.vue';
import BlogPage from '../components/single.vue';


const routes = [
    { path: '/login', component: LoginPage, name: 'Login' },
    { path: '/', component: HomePage, name: 'Home' }, // Trang chủ
    { path: '/about', component: AboutPage, name: 'About' },
    { path: '/menu', component: MenuPage, name: 'Menu' },
    { path: '/post', component: postManagement, name: 'Post' },
    { path: '/contact', component: ContactPage, name: 'Contact' },
    { path: '/events', component: BookingPage, name: 'Booking' },
    { path: '/chefs', component: ChefsPage, name: 'Chefs' },
    { path: '/single', component: BlogPage, name: 'Blog' },
    { path: '/book', component: SinglePage, name: 'Single' },

    // Redirect to Home if path not found
    { path: '/:pathMatch(.*)*', redirect: '/' } 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
