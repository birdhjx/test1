import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Vuex from 'vuex';
import { resolve } from 'upath';//？

Vue.use(VueRouter);
vue.use(Vuex);


new Vue({
    el:'#app',
    render:h=>h(App)
});


const Routers = [
    {
        path: '/index',
        meta:{
            title:'首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path:'/about',
        meta:{
            title:'关于'
        },
        component:(resolve)=>require(['./views/about.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/index'
    },
    {
        path:'/user/:id',
        meta:{
            title:'个人主页'
        },
        component:(resolve)=>require(['./views/user.vue'],resolve)
    }
];

const RouterConfig={
    mode:'history',
    routers:Routers,
};

const router =new VueRouter(RouterConfig);

//to即将进入的目标的路由对象。from当前导航即将要离开的路由对象。next调用该方法后，才能进入下一个钩子
router.beforeEach((to,from,next)=>{
    window.document.title=to.meta.title;//此处是更改标题
    next();
});

const store=new Vuex.Store({
    state:{
        count:0
    }

});


new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>{
        return h(app)
    }
})