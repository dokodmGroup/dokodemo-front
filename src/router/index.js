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
      path: '/editor',
      name: 'editor',
      component: resolve => require(['@/pages/Editor'], resolve)
    },
    {
      path: '/signup',
      name: 'signup',
      component: resolve => require(['@/pages/Signup'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/*',
      name: '404',
      component: PageNotFound
    },
    
  ]
})
