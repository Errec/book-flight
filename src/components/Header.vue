<template>
  <header class="header" :class="{'header--fixed': headerPassedTop}" :style="{height:headerHeight + 'px'}">
    <div class="header__logo">
      <img src="../assets/img/logo.svg" alt="logo">
    </div>
    <div class="header__clock">
      <img src="../assets/img/ic_clock.svg" alt="icon-clock">
      <p>{{hours}}:{{minutes}}</p>
    </div>
  </header>
</template>

<script>
import { getZeroPad } from '../helpers/Filters'

export default {
  props: ['headerPassedTop', 'headerHeight'],
  data () {
    return {
      hours: '',
      minutes: '',
      hourtime: ''
    }
  },
  mounted () {
    setInterval(this.updateDateTime, 1000)
  },
  methods: {
    updateDateTime () {
      let now = new Date()
      this.hours = now.getHours()
      this.minutes = getZeroPad(now.getMinutes())
    }
  }
}
</script>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .header
    width: 100%
    z-index: 10000
    padding: 12px
    border-bottom: solid 2px rgba($MMGrey, 0.6)
    background-color: $MMLight
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center

  .header--fixed
    position: fixed
    top: 0
    transform: translate3d(0, -60px, 0)
    animation: headdown 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards

  @keyframes headdown
    100%
      transform: translate3d(0, 0, 0)

  .header__logo
    height: 100%
    img
      width: auto
      height: 30px
      margin-right: 4px

  .header__info-list
    display: none
  .header__clock
    border: solid 2px $MMOrange
    border-radius: 3px
    position: relative
    padding: 4px 12px
    img
      display: inline-block
      vertical-align: middle
      position: relative
      width: auto
      height: 60%
      margin-right: 4px
    p
      font-size: 1rem
      display: inline-block
      vertical-align: middle
      font-weight: 900
</style>