import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/components/pages/Home'

import CategoryList from '@/components/pages/CategoryList'
import TagList from '@/components/pages/TagList'
import SearchList from '@/components/pages/SearchList'
import ItemView from '@/components/pages/ItemView'

import PostItem from '@/components/pages/PostItem'
import postTutorial from '@/components/pages/PostTutorial'

import User from '@/components/pages/User'
import UserProfile from '@/components/pages/UserProfile'
import UserCrafts from '@/components/pages/UserCrafts'

import AuthLogin from '@/components/pages/AuthLogin'

import About from '@/components/pages/About'
import Legal from '@/components/pages/Legal'


Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/legal',
      name: 'legal',
      component: Legal
    },
    {
      path: '/search',
      name: 'searchList',
      component: SearchList,
      props: (route) => ({ query: route.query.q })
    },
    {
      path: '/category/',
      component: CategoryList,
      redirect: { name: 'home' },
      children: [
        {
          path: ':category',
          name: 'categoryList'
        }
      ]
    },
    {
      path: '/tag/',
      component: TagList,
      redirect: { name: 'home' },
      children: [
        {
          path: ':tag',
          name: 'tagList'
        }
      ]
    },
    {
      path: '/craft/:slug',
      name: 'itemView',
      component: ItemView
    },
    {
      path: '/contribute',
      redirect: { name: 'postItem' },
    },
    {
      path: '/contribute/post',
      name: 'postItem',
      component: PostItem
    },
    {
      path: '/contribute/tutorial',
      name: 'postTutorial',
      component: postTutorial
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '',
          beforeEnter: (to, from, next) => {
            next({
              name: 'userProfile',
              params: {
                id: to.params.id
              }
            })
          }
        },
        {
          path: 'profile',
          name: 'userProfile',
          component: UserProfile
        },
        {
          path: 'crafts',
          name: 'userCrafts',
          component: UserCrafts
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: AuthLogin,
      alias: ['/register', '/forgotten-password']
    }
  ]
})
