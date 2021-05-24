require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
// importing all the vue pages
import Main from './main.vue';//header and footer in the main page
import Home from './pages/home.vue';
import Edit from './pages/edit.vue';
import Erorr_page from './pages/erorr.vue';


Vue.use(VueRouter);

const router =new VueRouter({
    routes:[
    {path:'/',component:Home},
    {path:'/edit',component:Edit},
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
