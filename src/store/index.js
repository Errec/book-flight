import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airportsList: [],
    postdata: {
      tripType: "RT", 
      from: "",
      to: "",
      outboundDate: "",
      inboundDate: "",
      cabin: "EC",
      adults: 1,
      children: 0,
      infants: 0
    },
    flightAlert: false
  },
  actions: actions,
  mutations: mutations,
  getters: getters
})
