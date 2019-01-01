import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vue-scroll'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'

Vue.use(VueSweetalert2)
Vue.use(vuescroll)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
