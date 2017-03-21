import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import History from '../pages/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/History',
      name: 'History',
      component: History
    }
  ]
})
