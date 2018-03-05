import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexes from '@/components/indexes'
import index from '@/view/index'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/indexes',
      name: 'indexes',
      component: indexes
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
