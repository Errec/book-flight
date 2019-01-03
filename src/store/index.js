import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseFlightList: [],
    airportsList: [],
    flightList: [],
    filterderFlightList: [],
    totalFlights: 0,
    flightDirection: "inbound",
    filterFlag: false,
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
