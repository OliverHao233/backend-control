import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Basechart from '../components/Basechart'
import Vuechart from '../components/Vuechart'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/home',
            component: Home,
            name: 'home',
            children: [
                {
                    path: 'basechart',
                    component: Basechart,
                    name: 'basechart',
                },
                {
                    path: 'vuechart',
                    component: Vuechart,
                    name: 'vuechart',
                },
            ]
        }
    ]
})
