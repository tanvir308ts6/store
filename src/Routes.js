import { createWebHistory, createRouter } from "vue-router";
import Home from './components/store_module/Home.vue';
// import itemReceive from './components/store_module/itemReceive.vue';
import itemList  from './components/store_module/itemList.vue';
import ReceiveItemList from './components/store_module/ReceiveItemList.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'itemList',
        path:'/itemList',
        component:itemList
    },
    {
        name:'ReceiveItemList',
        path:'/ReceiveItemList',
        component:ReceiveItemList
    },
    // {
    //     name:'itemReceive',
    //     path:'/itemReceive',
    //     component:itemReceive
    // },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;