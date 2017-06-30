import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '@/pages/AppLayout'
import PageNotFound from '@/pages/PageNotFound'
import Developing from '@/pages/Developing'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect:{
        name:'playground'
      },
      // beforeEnter(to, from, next){
      //   if(!localStorage.token){
      //     next({
      //       name:'login'
      //     })
      //   }
      // },
      component: AppLayout,
      children:[
        {
          path:'addnew/:itemId*',
          name:'addnew',
          component: resolve => require(['@/pages/Addnew'], resolve)
        },
        {
          path: 'pgtest',
          name: 'pgtest',
          component: Test
        },
        {
          path:'cdashboard',
          name:'cdashboard',
          component: Developing
        }
      ]
    },
    {
      path:'/playground',
      name: 'playground',
      component: resolve => require(['@/pages/Playground'], resolve)
    },
    {
      path: '/retake-password',
      name: 'retake-password',
      component: Developing
    },
    {
      path: '/retake-account',
      name: 'retake-account',
      component: Developing
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/Login'], resolve)
    },
    {
      path: '/news-detail/:itemId',
      name: 'news-detail',
      component: Developing
    },
    {
      path: '/signup',
      name: 'signup',
      component: Developing
    },
    {
      path: '/*',
      name: '404',
      component: PageNotFound
    },
  ]
})
