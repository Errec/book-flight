import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
