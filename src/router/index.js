import Vue from 'vue'
import router from 'vue-router'
import Home from '@/components/Home'

Vue.use(router)

export default new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})