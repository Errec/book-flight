<template>
  <div class="modal-route">
    <div class="modal-route__wrapper mm-modal__wrapper">
      <label class="modal-route__label"> De:
        <model-select class="modal-route__select" :options="options" v-model="origem" placeholder="Cidade ou Aeroporto"></model-select>
      </label>
      <label class="modal-route__label"> Para:
        <model-select class="modal-route__select" :options="options" v-model="destino" placeholder="Cidade ou Aeroporto"></model-select>
      </label>
      <p class="mm-err-msg">{{formErr}}</p>
      <button @click="validateRoute" class="mm-button"> Confirmar </button>
    </div>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import airportsData from '../../json/airports.json'

export default {
  data () {
    return {
      formErr: '',
      options: [],
      origem: {
        value: '',
        text: ''
      },
      destino: {
        value: '',
        text: ''
      }
    }
  },
  beforeMount () {
     this.$store.dispatch('loadAirports', airportsData.airports)
     const airportList = Object.entries(this.$store.getters.getAirports)
     //this.options = airportList
   },
  methods: {
    validateRoute () {
      if (this.origem.value === this.destino.value && this.origem.value) {
        this.formErr = 'Destino e Origem devem ser diferentes.'
      } else if (!this.origem.value || !this.destino.value) {
        this.formErr = 'Favor preencher todos os campos.'
      } else {
        const airports = {
          origem: this.origem,
          destino: this.destino
        }
        this.formErr = ''
        this.$emit('newRoute', airports)
      }
    }
  },
  components: {
    ModelSelect
  }
}
</script>

<style lang="sass">
  @import '../../styles/variables/colors.sass'

  .modal-route
    position: fixed
    z-index: 1000
    top: 0
    bottom: 0
    right: 0
    left: 0
    // width: calc(100vw - 24px)
    background-color: rgba($MMGrey, 0.7)
    padding: 12px
    transition: opacity 0.2s ease;

  .modal-route__wrapper
    max-width: 450px
    margin: 0 auto
    transition: transform 0.2s ease-in-out;
    position: relative
    top: 10%
    display: block
    padding: 16px
    background-color: $MMbgColor
    border-radius: 4px
    height: 50%
    min-height: 300px
    width: 100%
    .mm-button
      position: absolute
      bottom: 16px
      left: 0
      right: 0
      margin: 0 auto
      width: 60%
      max-width: 300px

  .modal-route__label
    color: $MMGrey
    font-size: 1rem
    font-weight: bold

  .modal-route__select
    margin-bottom: 12px
</style>
