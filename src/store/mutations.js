export default {
    setAirports (state, payload) {
      state.airportsList = payload
    },
    setDates (state, payload) {
      state.postdata.outboundDate = payload.outboundDate
      state.postdata.inboundDate = payload.inboundDate
    },
    setDestination (state, payload) {
      state.postdata.from = payload.from
      state.postdata.to = payload.to
    },
    setPassengersData (state, payload) {
      state.postdata.cabin = payload.cabin
      state.postdata.adults = payload.adults
      state.postdata.children = payload.children
      state.postdata.infants = payload.infants
    },
    setTripType (state, payload) {
      state.postdata.tripType = payload.tripType
    },
    setPostdata (state, payload) {
      state.postdata = payload
    },
    setFlightAlert (state, payload) {
      state.flightAlert = payload
    },
    setFlightList (state, payload) {
      state.flightList = payload
    }
  }