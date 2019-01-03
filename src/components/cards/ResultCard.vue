<template>
  <div class="result-card">
    <ul class="result-card__info-list">
      <li class="result-card__info">
        <p>{{flightData.airline}}</p>
        <p>{{flightData.flightNumber}}r</p>
      </li>
      <li class="result-card__info">
        <p>{{departureHour}}</p>
        <p>{{flightData.from}}</p>
      </li>
      <li class="result-card__info">
        <p>{{duration}}</p>
        <p>{{flightData.stops ? `${flightData.stops} PARADA(S)` : 'VOO DIRETO'}}</p>
      </li>
      <li class="result-card__info">
        <p>{{arrivalHour}}</p>
        <p>{{flightData.to}}</p>
      </li>
    </ul>
    <div class="result-card__price-box">
      <p v-if="airlineFare > milesFare" class="result-card__price-old"> {{flightData.pricing.airlineName}} <span>R${{airlineFare}}</span></p>
      <button class="mm-button" type="submit">R${{milesFare}}</button>
      <p v-if="airlineFare > milesFare" class="result-card__price-information">Economize {{flightData.pricing.savingPercentage.toFixed(0)}}% na MaxMilhas</p>
    </div>
    <div @click="showMore = !showMore" class="result-card__more">
      <p>
        <span>+</span> detalhes do voo
      </p>
      <div v-if="showMore" class="result-card__details">
        <p>TAXA DE EMBARQUE: R${{(flightData.pricing.airline.saleTotal - airlineFare).toFixed(2)}}</p>
        <p>CLASSE DO VOO: {{flightData.cabin === 'EC' ? 'ECONÔMICA' : 'EXECUTIVA'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['flightData'],
    data () {
      return {
        showMore: false,
        departureHour:moment(this.flightData.departureDate).format("HH:mm"),
        arrivalHour: moment(this.flightData.arrivalDate).format("HH:mm"),
        duration: Math.floor(this.flightData.duration / 60) + 'H:' + this.flightData.duration % 60,
        airlineFare: this.flightData.pricing.airline.fareTotal.toFixed(2),
        milesFare: this.flightData.pricing.miles === null ? 0 : this.flightData.pricing.miles.fareTotal.toFixed(2)
      }
    }
  }
</script>

<style lang="sass">
  @import '../../styles/variables/colors.sass'

  .result-card
    box-shadow: 0 2px 1px rgba(0,0,0,.1)
    padding: 0 12px
    text-align: center
    background-color: $MMLight
    margin-bottom: 6px
    &:last-child
      margin-bottom: 3px

  .result-card__info-list
    width: calc(100% + 24px)
    transform: translateX(-12px)
    display: flex
    flex-direction: row
    justify-content: center

  .result-card__info
    flex: 1
    padding: 8px 0
    list-style: none
    p
      font-size: 0.8rem
      font-weight: bold
      text-transform: uppercase

  .result-card__price-box
    border-top: dashed 1px rgba($MMGrey, 0.6)
    border-bottom: dashed 1px rgba($MMGrey, 0.6)
    padding: 16px 0
    .result-card__price-old
      font-size: 0.8rem
      font-weight: bold
      text-transform: uppercase
      span
        text-decoration: line-through
    .result-card__price-information
      font-size: 0.75rem
      font-weight: bold
      color: $MMOrange

  .result-card__more
    cursor: pointer
    padding: 12px 0
    p
      text-transform: uppercase
      font-size: 0.9rem
      font-weight: bold
    span
      vertical-align: sub
      color: $MMGreen
      font-size: 1.2rem
      font-weight: 900

  .result-card__details
    margin-top: 8px
    padding: 4px
    display: flex
    outline: solid 1px $MMBlue
    p
      color: $MMBlue
      flex: 1
      font-size: 0.7rem
</style>
