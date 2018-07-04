import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import * as pages from './pages'
Vue.use(Router)
let routes = []
Object.keys(pages).forEach(key => {
  routes.push(pages[key])
})
export default new Router({
  mode: 'history',
  routes
})
