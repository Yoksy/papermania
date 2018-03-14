import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Item from '@/components/views/item'
import About from '@/components/views/about'

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
      path: '/craft/:type/:itemId',
      name: 'Item',
      component: Item
    }
  ]
})
