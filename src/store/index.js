import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airportsList: [],
    flightList: [],
    totalFlights: 0,
    flightDirection: "inbound",
    postdata: {
      tripType: "RT", 
      from: "BSB",
      to: "BHZ",
      outboundDate: "2019-01-10",
      inboundDate: "2019-01-15",
      cabin: "EC",
      adults: 1,
      children: 2,
      infants: 0
    },
    flightAlert: false,
    filterValues: {
      stops: [],
      company: []
    }
  },
  actions: actions,
  mutations: mutations,
  getters: getters
})
