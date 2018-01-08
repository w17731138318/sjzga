import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import Login from 'components/commons/login/Login'


Vue.use(Router)

export default new Router({
    linkActiveClass: 'is-active',//
    scrollBehavior: () => ({ y: 0 }),//滑动
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})