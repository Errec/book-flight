<template>
  <div class="tab-direction">
    <div class="tab-direction__ida" :class="{'tab-direction--selected': true}">
      <p>
        Selecione sua ida
      </p>
    </div>
    <div class="tab-direction__volta" :class="{'tab-direction--selected': false}">
      <p>
        Selecione sua volta
      </p>
    </div>
  </div>
</template>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .tab-direction
    position: relative
    height: 60px
    width: 100%
    border-bottom: solid 2px rgba($MMGrey, 0.6)
    background-color: $MMLight
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
  .tab-direction__ida, .tab-direction__volta
    position: relative
    flex: 1
    text-align: center
    height: 100%
    &:after
      content: ""
      position: absolute
      width: 100%
      height: 4px
      background-color: transparent
      left: 0
      bottom: -2px
      transition: background-color 0.3s ease-in-out
    p
      position: relative
      top: 50%
      transform: translateY(-50%)
      font-weight: bold
      font-size: 0.85rem
  .tab-direction__ida
    border-right: solid 2px rgba($MMGrey, 0.6)
  .tab-direction--selected
    &:after
      background-color: $MMGreen

</style>
