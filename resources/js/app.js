require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
// importing all the vue pages
import Main from './main.vue';//header and footer in the main page
import Home from './pages/home.vue';
import AllCake from './pages/all_cake.vue';
import Vieww from './pages/cake_info.vue';
import Erorr_page from './pages/erorr.vue';
import Cart from './pages/cart.vue';
import Location from './pages/location.vue';
import Done from './pages/done.vue';
import About from './pages/about.vue';
import Contact from './pages/contact.vue';


Vue.use(VueRouter);

const router =new VueRouter({
    routes:[
    {path:'/',component:Home},
    {path:'/cake',component:AllCake},
    {path:'/info/:id',component:Vieww},// for this we have to use two anyting in route
    {path:'/cart',component:Cart},
    {path:'/about',component:About},
    {path:'/contact',component:Contact},
    {path:'/location',component:Location},
    {path:'/done',component:Done},
    {path:'/*',component:Erorr_page},

    
] ,
   mode:'history'
});
 
const app = new Vue({
    router,
    components:{
        Main
    },
    // template: '<Main/>',
    render:h => h(Main),    
}).$mount('#app');
