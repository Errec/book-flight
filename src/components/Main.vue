<template>
  <div class="main">
    <bar-search></bar-search>
    <button @click="findFlights" class="mm-button main_search-btn">Pesquisar Passgem</button>
    <tab-direction></tab-direction>
    <alert></alert>
    <result-box></result-box>
  </div>
</template>

<script>
  import BarSearch from './BarSearch'
  import TabDirection from './TabDirection'
  import Alert from './Alert'
  import ResultBox from './ResultBox'

  export default {
    components: {
      BarSearch,
      TabDirection,
      Alert,
      ResultBox
    },
    methods: {
      findFlights () {
        let payload = this.$store.getters.getPostdata
        if (payload.inboundDate === "" || payload.outboundDate === "") {
          this.$swal({
            text: 'Necessário data de Ida e Volta',
            type: 'warning'
          })
          return
        } else if (payload.from === "" || payload.to === "") {
          this.$swal({
            text: 'Necessário Origem e Destino',
            type: 'warning'
          })
          return
        } else {
          this.$store.dispatch('clearFlightList', []) // Limpa lista para nova busca
          this.$store.dispatch('loadFlights', payload)
          const urlPath = `/busca-passagens-aereas/${payload.tripType}/${payload.from}/${payload.to}/${payload.outboundDate}/${payload.inboundDate}/${payload.cabin}/${payload.adults}/${payload.children}/${payload.infants}`
          this.$router.push(urlPath)
        }
      }
    }
  }
</script>

<style lang="sass">
  .main_search-btn
    margin: 0 auto
    max-width: 100%
    border-radius: 0
    display: block
    text-align: center
</style>