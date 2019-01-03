import Vue from 'vue'
import axios from 'axios'

export default {
  loadAirports ({commit}, payload) {
    commit('setAirports', payload)
  },
  addDestination ({commit}, payload) {
    commit('setDestination', payload)
  },
  addDates ({commit}, payload) {
    commit('setDates', payload)
  },
  addPassengerData ({commit}, payload) {
    commit('setPassengersData', payload)
  },
  loadFlights ({commit}, payload) {
    const SEARCH_FLIGHTS_API = 'https://flight-price-hmg.maxmilhas.com.br'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kIiwic3ViIjoidGVzdGUtZnJvbnRlbmQiLCJlbnYiOiJobWcifQ.nM6wMem6dxF0CcDlig5iA9az5ZfmbXDjq1e4ypZXwjU'


      axios.create({
        headers: { "token": token}
      })
      axios.post(`${ SEARCH_FLIGHTS_API }/search?time=${Date.now()}`, payload).then((flights) => {

        const searchId = flights.data.id
        const numberOfCompanies = flights.data.airlines.length
        let counter = 0

        flights.data.airlines.forEach((airlines, index) => {
          Vue.swal({
            closeOnClickOutside: false,
            allowOutsideClick: false,
            text: "Procurando Voos...",
            showConfirmButton: false,
            onOpen: () => {
              Vue.swal.showLoading()
            }
          })
          if (airlines.status.enable) {
            axios.get(`${SEARCH_FLIGHTS_API }/search/${searchId}/flights?airline=${airlines.label}`).then((flight)=>{
              commit('setFlightList',flight.data)
              counter++
              if (counter === numberOfCompanies) {
                Vue.swal({
                  showConfirmButton: false,
                  timer: 1000,
                  type: 'success',
                  text: "Procurando Voos"
                })
              }
            }).catch((err)=>{
              counter++
              if (counter === numberOfCompanies) {
                Vue.swal({
                  showConfirmButton: false,
                  timer: 1000,
                  type: 'success',
                  text: "Procurando Voos"
                })
              }
            })
          }
        })
      }).catch((err) => {
        Vue.swal({
          showConfirmButton: true,
          type: 'error',
          text: "Tente mais tarde"
        })
      });
  },
  loadFlightAlert ({commit}, payload) {
    commit('setFlightAlert', payload)
  },
  clearFlightList ({commit}, payload) {
    commit('clearFlightList', payload)
  },  
  changeFlightDirection ({commit}, payload) {
    commit('setFlightDirection', payload)
  },
  loadFilterderValues ({commit}, payload) {
    commit('setFilterValues', payload)
  },
  loadFilterderFlightList ({commit}, payload) {
    commit('setFilteredFlightList', payload)
  }
}