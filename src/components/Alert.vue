<template>
  <div class="alert">
    <div class="alert__wrapper" @click="alertOff = !alertOff">
      <p v-if="alertOff">
        Crie um alerta de preço para essa busca
      </p>
      <p v-else>
        Remova o alerta de preço para essa busca
      </p>
      <img v-if="alertOff" src="../assets/img/ic_add_alert.svg" alt="icon add alert">
      <img v-else src="../assets/img/ic_notifications_active.svg" alt="icon remove alert">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        alertOff: true
      }
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .alert
    height: 60px
    padding: 10px 12px

  .alert__wrapper
    padding: 0 8px
    height: 40px
    background-color: $MMLight
    border-radius: 4px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    p
      font-size: 0.8rem
      font-weight: bold
    img
      height: 30px
</style>
