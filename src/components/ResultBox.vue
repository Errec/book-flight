<template>
  <div class="result-box">
    <ul class="result-box__header">
      <li>
        <p>Cia Aérea</p>
      </li>
      <li>
        <p>Partida</p>
      </li>
      <li>
        <p>Duração</p>
      </li>
      <li>
        <p>Chegada</p>
      </li>
    </ul>
    <result-card></result-card>
    <result-card></result-card>
    <result-card></result-card>
  </div>
</template>

<script>
import ResultCard from './cards/ResultCard'

export default {
  components: {
    ResultCard
  }
}
</script>

<style lang="sass">
  @import '../styles/variables/colors.sass'

  .result-box
    text-align: center
    padding: 0 12px

  .result-box__header
    list-style: none
    width: 100%
    height: 50px
    border-radius: 4px 4px 0 0
    background-color: $MMGrey
    color: $MMLight
    display: flex
    flex-direction: row
    justify-content: center
    li
      flex: 1
      border-right: solid 1px rgba($MMLight, 0.4)
      height: 100%
      &:last-child
        border-right: none
      p
        position: relative
        top: 50%
        transform: translateY(-50%)
        font-size: 0.85rem
        font-weight: bold
</style>
