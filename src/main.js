import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vue-scroll'
import VueSweetalert2 from 'vue-sweetalert2'
 
Vue.use(VueSweetalert2)
Vue.use(vuescroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
