import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vue-scroll'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import vSelect from 'vue-select'
import router from './router'

Vue.component('v-select', vSelect)

Vue.use(VueSweetalert2)
Vue.use(vuescroll)

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    if (window.location.href.indexOf('busca-passagens-aereas') > -1) {

      const pathArray = window.location.href.split('/');
      const payload = {
        tripType: pathArray[4],
        from: pathArray[5],
        to: pathArray[6],
        outboundDate: pathArray[7],
        inboundDate: pathArray[8],
        cabin: pathArray[9],
        adults: Number(pathArray[10]),
        children: Number(pathArray[11]),
        infants: Number(pathArray[12])
      }

      store.dispatch('loadFlights', payload)
    }
  }
}).$mount('#app')
