// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueTheMask, { mask } from 'vue-the-mask'
import App from './App'
import components from './components'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(VueTheMask)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    directives: { mask },
    components: { App, components },
    template: '<App/>'
})
