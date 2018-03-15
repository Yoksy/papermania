import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Craft from '@/components/pages/Craft'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/crafts/:category/:slug',
      name: 'Craft',
      component: Craft
    }
  ]
})
