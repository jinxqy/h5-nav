import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dome from '@/pages'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demmo',
      component: Dome
    }
  ]
})
