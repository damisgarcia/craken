import Vue from 'vue'
import Router from 'vue-router'
import CepView from '@/views/CepView'
import TodoView from '@/views/TodoView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CepView',
            component: CepView
        },
        {
            path: '/todos',
            name: 'TodoView',
            component: TodoView
        }
    ]
})
