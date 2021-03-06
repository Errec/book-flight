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
      state.flightList.push(payload)
    },
    setBaseFlightList (state, payload) {
      state.baseFlightList.push(payload)
    },
    clearFlightList (state, payload) {
      state.flightList = payload
    },
    setTotalFlight (state, payload) {
      state.totalFlights = payload
    },
    setFlightDirection (state, payload) {
      state.flightDirection = payload
    },
    setFilterValues (state, payload) {
      state.filterValues = payload
    },
    setFilteredFlightList (state, payload) {
      state.filterderFlightList.push(payload)
    },
    resetFilteredFlightList (state, payload) {
      state.filterderFlightList = payload
    },
    setFilterFlag (state, payload) {
      state.filterFlag = payload
    },
    setNewFlightList (state, payload) {
      state.flightList = payload
    }
  }
