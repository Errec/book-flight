<template>
  <div class="footer">
    <div @click="toggleModal" class="footer__voos">
      <p>
        Filtrar voos
      </p>
    </div>
    <div class="footer__show-milhas">
      <p>
        Milhas do voo
      </p>
    </div>
  <keep-alive>
    <modal-filter @closeModal="toggleModal" v-if="showFilterModal"></modal-filter>
  </keep-alive>
  </div>
</template>

<script>
  import ModalFilter from './modal/ModalFilter.vue'
  export default {
    data () {
      return {
        showFilterModal: false
      }
    },
    components: {
      ModalFilter
    },
    methods: {
      toggleModal () {
        this.showFilterModal = !this.showFilterModal
      }
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .footer
    box-shadow: 8px 9px 47px -8px rgba(0, 0, 0, 0.75)
    position: fixed
    bottom: 0
    left: 0
    right: 0
    margin: 0 auto
    height: 60px
    width: 100%
    max-width: 450px
    background-color: $MMLight
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
  .footer__voos, .footer__show-milhas
    cursor: pointer
    user-select: none
    padding-left: 16px
    position: relative
    flex: 1
    text-align: center
    height: 100%
    p
      display: inline-block
      position: relative
      top: 50%
      transform: translateY(-50%)
      font-weight: bold
      font-size: 0.85rem
      text-transform: uppercase
      &:after
        content: ""
        width: 20px
        height: 20px
        position: absolute
        left: -22px
        bottom: -2px
        background:
          position: center
          size: contain
          repeat: no-repeat
  .footer__voos
    border-right: solid 2px rgba($MMGrey, 0.6)
    p
      &:after
        left: -20px
        background:
          image: url(../assets/img/ic_filter.svg)
  .footer__show-milhas
    p
      &:after
        background:
          image: url(../assets/img/ic_eye.svg)
</style>
