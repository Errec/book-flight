export default {
    getAirports (state) {
      return state.airportsList
    },
    getFlightList (state) {
      return state.flightList
    },
    getPostdata (state) {
      return state.postdata
    },
    getFlightAlert (state) {
      return state.flightAlert
    },
    getTotalFlights (state) {
      return state.totalFlights
    },
    getFlightDirection (state) {
      return state.flightDirection
    }
}