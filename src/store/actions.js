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
    const postData = payload
    const SEARCH_FLIGHTS_API = 'https://flight-price-hmg.maxmilhas.com.br'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kIiwic3ViIjoidGVzdGUtZnJvbnRlbmQiLCJlbnYiOiJobWcifQ.nM6wMem6dxF0CcDlig5iA9az5ZfmbXDjq1e4ypZXwjU'


      axios.create({
        headers: { "token": token}
      })
      axios.post(`${ SEARCH_FLIGHTS_API }/search?time=${Date.now()}`, postData).then((flights) => {

        const avaliableCompanies = flights.data.airlines.filter(function(airlines) {
          if (airlines.status.enable) {
           return airlines
          }
        })

        // axios.get(`${SEARCH_FLIGHTS_API }/search/${searchId}/flights?airline=${airline.label}`)

      }).catch((err) => {
          console.log(err)
      });

    // commit('setPostdata', payload)
  },
  loadFlightAlert ({commit}, payload) {
    commit('setFlightAlert', payload)
  }
}