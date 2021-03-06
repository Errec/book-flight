<template>
  <div class="bar-search">

    <div class="bar-search-small">
      <ul>
        <li class="bar-search-small__trajeto" @click="showModalRoute = true">
          <img src="../assets/img/ic_location.svg" alt="icon location">
          <p class="ar-search-small__text">
            {{selectedRoute}}
          </p>
        </li>
        <li class="bar-search-small__date-going">
          <img src="../assets/img/ic_date.svg" alt="icon calendar">
          <flight-datepicker :date="startTime" :option="option" :limit="startLimit"></flight-datepicker>
        </li>
        <li class="bar-search-small__date-back">
          <img src="../assets/img/ic_date.svg" alt="icon calendar">
          <flight-datepicker :date="endTime" :option="Object.assign({}, option, {placeholder: 'VOLTA'})" :limit="endLimit"></flight-datepicker>
        </li>
        <li class="bar-search-small__people">
          <p class="bar-search-small__people-number">{{passengers}}</p>
          <img @click="showModalPessenger = true" src="../assets/img/ic_group.svg" alt="icon group">
          <p>{{cabin}}</p>
        </li>
      </ul>
    </div>

    <keep-alive>
      <modal-passenger v-on:confirmForm="showModalPessenger=false" v-if="showModalPessenger"></modal-passenger>
    </keep-alive>

    <transition name="mm-modal">
      <keep-alive>
        <modal-route @newRoute="updateRoute" v-if="showModalRoute"></modal-route>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  import FlightDatepicker from 'vue-datepicker/vue-datepicker-es6'
  import ModalRoute from './modal/ModalRoute'
  import ModalPassenger from './modal/ModalPassenger'
  import { compareDates } from '../helpers/CompareDates'
  import moment from 'moment'


  export default {
    data () {
      return {
        minhaData: '',
        showModalRoute: false,
        showModalPessenger: false,
        selectedRoute: 'Para onde?',
        startTime: {
          time: ''
        },
        endTime: {
          time: ''
        },
        option: {
          type: 'day',
          week: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
          month: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          format: 'DD-MM-YYYY',
          placeholder: 'IDA',
          inputStyle: {
            'padding-left': '2px',
            'display': 'inline-block',
            'font-size': '12px',
            'border': 'none',
            'width': '80px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#1abc9c',
            headerText: '#ffffff'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancelar'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        startLimit: [{
          type: 'fromto',
          from: ''
        }],
        endLimit: [{
          type: 'fromto',
          from: ''
        }]
      }
    },
    methods: {
      updateRoute (airports) {
        this.showModalRoute = false
        this.selectedRoute = `${airports.origem.value} ${airports.destino.value}`
      }
    },
    watch: {
      startTime: {
        handler () {
          const compareResult = compareDates(this.startTime.time, this.endTime.time)
          if (compareResult === false && this.endTime.time !== "") {
            this.endTime.time = ""
            let payload = {
              outboundDate: "",
              inboundDate: ""
            }
            this.$store.dispatch('addDates', payload)
            this.$swal({
              text: 'Data de Ida deve ser anterior à data de Volta',
              type: 'warning' 
            })
          }
          let payload = {
            outboundDate: this.endTime.time,
            inboundDate: this.startTime.time
          }
          this.$store.dispatch('addDates', payload)
        },
        deep: true
      },
      endTime: {
        handler () {
          const compareResult = compareDates(this.startTime.time, this.endTime.time)
          if (compareResult === false && this.startTime.time !== "") {
            this.startTime.time = ""
            let payload = {
              outboundDate: "",
              inboundDate: ""
            }
            this.$store.dispatch('addDates', payload)
            this.$swal({
              text: 'Data de Ida deve ser anterior à data de Volta',
              type: 'warning' 
            })
          }
          let payload = {
            inboundDate: moment(this.endTime.time,'DD-MM-YYYY').format('YYYY-MM-DD'),
            outboundDate: moment(this.startTime.time,'DD-MM-YYYY').format('YYYY-MM-DD')
          }
          this.$store.dispatch('addDates', payload)
        },
        deep: true
      }
    },
    mounted () {
      this.startLimit[0].from = new Date().toJSON().slice(0,10);
      this.endLimit[0].from = new Date().toJSON().slice(0,10);
    },
    computed: {
      passengers () {
        return this.$store.getters.getPostdata.adults + this.$store.getters.getPostdata.children + this.$store.getters.getPostdata.infants
      },
      cabin () {
        return this.$store.getters.getPostdata.cabin
      }
    },
    components: {
      ModalRoute,
      ModalPassenger,
      FlightDatepicker
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .bar-search-small__trajeto
    cursor: pointer
    user-select: none

  .bar-search
    user-select: none
    position: relative
    padding: 10px
    height: 60px
    border-bottom: solid 2px rgba($MMGrey, 0.6)
    background-color: $MMLight
    ul
      height: 40px
      display: flex
      flex-direction: row
      justify-content: space-around
      align-items: center
    li
      list-style: none
      position: relative
      display: flex
      flex-direction: row
      align-items: center
    .ar-search-small__text
      width: 100%
      position: relative
      font-size: 0.8rem
      font-weight: bold
      text-transform: uppercase
    span
      font-weight: normal
    img
      height: 13px

  .bar-search-small__date-going
    border-left: solid rgba($MMGrey, 0.5) 2px
    padding-left: 1%

  .bar-search-small__date-back
    border-right: solid rgba($MMGrey, 0.5) 2px
    padding-right: 1%

  .bar-search-small__people
    cursor: pointer
    input
      width: 40px
      border: solid $MMGrey 1px
    img
      margin: 0 4px
      height: 25px
</style>
