import Vue from 'vue'

export default {
  loadAirports ({commit}, payload) {
    commit('setAirports', payload)
  },
  loadFlights ({commit}, payload) {
    console.log('GETTING DATA')
    commit('setPostdata', payload)
  },
  loadFlightAlert ({commit}, payload) {
    console.log('ALERT ON/OFF??')
    commit('setFlightAlert', payload)
  }
}