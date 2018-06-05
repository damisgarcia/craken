import Vue from 'vue'
import Router from 'vue-router'
import CepView from '@/views/CepView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CepView',
            component: CepView
        }
    ]
})
