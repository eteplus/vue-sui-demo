import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import pullToRefresh from './directives/pullToRefresh'
import app from './main'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.http.options.root = '/api'
Vue.http.options.emulateJSON = true

// Directive
Vue.directive('pullToRefresh', pullToRefresh)

router.start(app, '#app')

window.router = router
