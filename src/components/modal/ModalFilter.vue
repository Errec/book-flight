<template>
  <div class="modal-filter">
    <div class="modal-filter__wrapper">
    <button class="modal-filter__close" type="button" @click="$emit('closeModal', true)">X</button>
      <div class="modal-filter__title"><p>Filtre resultados por</p></div>
          <div class="modal-filter__group" role="group" aria-label="Filtrar por companhia aérea"><h5>Companhia aérea</h5>
              <div>
                  <div  v-for="company in companyList" class="modal-filter__input-wrapper"><input v-model="selected" :value="company" type="checkbox"><label>{{company}}</label></div>
              </div>
          </div>
      <button  @click="applyFilter" class="mm-button modal-filter__apply">Aplicar Filtros</button>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        flightList: [],
        companyList: [],
        selected: []
      }
    },
    mounted () {
      this.flightList = this.$store.getters.getFlightList
        this.flightList.forEach( (company) => {
          if (company.inbound) {
            company.inbound.forEach((flightData) => {
              if (this.companyList.length === 0) {
                this.companyList.push(flightData.airline)
              } else if (!this.companyList.includes(flightData.airline)) {
                this.companyList.push(flightData.airline)
              }
            })
          }

        if (company.outbound) {
          company.outbound.forEach((flightData) => {
            if (this.companyList.length === 0) {
              this.companyList.push(flightData.airline)
            } else if (!this.companyList.includes(flightData.airline)) {
              this.companyList.push(flightData.airline)
            }
          })
        }
      });
    },
    methods: {
      applyFilter () {
        this.$emit('closeModal', true)
      }
    }
  }
</script>

<style lang="sass">
  @import '../../styles/variables/colors.sass'

  .modal-filter
    text-transform: uppercase
    padding: 16px
    background-color: white
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
  .modal-filter__title
    font-weight: 700
    font-size: 0.85rem
    margin-bottom: 0
    color: $MMBlue
    text-transform: uppercase
  .modal-filter__wrapper
    position: relative
    margin: 32px auto
    max-width: 600px
    border: solid 1px $MMBlue
    box-shadow: 0 2px 1px rgba(0,0,0,.1)
    border-radius: 4px
    padding: 12px
  .modal-filter__close
    top: -34px
    left: 0px
    position: absolute
    margin-bottom: 12px
    cursor: pointer
    background-color: transparent
    font-size: 1.4rem
    color: $MMGreen
    font-weight: bold
    border: none
    border-radius: 2px
    height: 28px
    width: 28px
  .modal-filter__group
    h5
      font-size: 0.8rem
      color: $MMBlue
  .modal-filter__input-wrapper
    color: $MMGrey
    font-size: 0.75rem
    input
      margin-right: 6px
      margin-bottom: 8px
      background-color: transparent
</style>