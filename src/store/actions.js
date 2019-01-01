import Vue from 'vue'

export default {
  loadAirports ({commit}, payload) {
    commit('setAirports', payload)
  }
}