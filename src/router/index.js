import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'

import CraftCategories from '@/components/pages/CraftCategories'
import CraftList from '@/components/pages/CraftList'
import CraftItem from '@/components/pages/CraftItem'

import PostCraftSimple from '@/components/pages/PostCraftSimple'
import PostCraftTutorial from '@/components/pages/PostCraftTutorial'

import User from '@/components/pages/User'
import UserProfile from '@/components/pages/UserProfile'
import UserCrafts from '@/components/pages/UserCrafts'

import AuthLogin from '@/components/pages/AuthLogin'
import AuthRegister from '@/components/pages/AuthRegister'
import AuthForgottenPassword from '@/components/pages/AuthForgottenPassword'

import About from '@/components/pages/About'
import Legal from '@/components/pages/Legal'


Vue.use(Router)

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
      path: '/crafts',
      name: 'crafts',
      component: CraftCategories,
      children: [
        {
          path: ':category',
          name: 'craftList',
          component: CraftList,
          children: [
            {
              path: ':slug',
              name: 'craftItem',
              component: CraftItem,
            }
          ]
        }
      ]
    },
    {
      path: '/contribute',
      children: [
        {
          path: 'post',
          name: 'craft-post',
          component: PostCraftSimple
        },
        {
          path: 'tutorial',
          name: 'craft-tutorial',
          component: PostCraftTutorial
        }
      ]
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
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
      component: AuthLogin
    },
    {
      path: '/register',
      name: 'register',
      component: AuthRegister
    },
    {
      path: '/forgotten_password',
      name: 'forgotten-password',
      component: AuthForgottenPassword
    }
  ]
})
