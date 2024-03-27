import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue';
import AboutUs from '../components/AboutUs.vue';
import productDetail from '../components/productDetail.vue';
import axios from 'axios';

const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  { 
    path: '/product/:id', 
    name: 'product', 
    component: productDetail // Added component 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

axios.defaults.baseURL = 'https://fakestoreapi.com/products';

export default router;
