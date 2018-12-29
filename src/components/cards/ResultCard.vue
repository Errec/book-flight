<template>
  <div class="result-card">
    <ul class="result-card__info-list">
      <li class="result-card__info">
        <p>gol</p>
        <p>G3-9018</p>
      </li>
      <li class="result-card__info">
        <p>06:55</p>
        <p>cnf</p>
      </li>
      <li class="result-card__info">
        <p>1H55</p>
        <p>voo direto</p>
      </li>
      <li class="result-card__info">
        <p>06:55</p>
        <p>gig</p>
      </li>
    </ul>
    <div class="result-card__price-box">
      <p class="result-card__price-old">gol <span>R$1.250,20</span></p>
      <button class="mm-button" type="submit">R$1.250,20</button>
      <p class="result-card__price-information">Economize 42% na Muita Milha</p>
    </div>
    <div class="result-card__more">
      <p>
        <span>+</span> detalhes do voo
      </p>
    </div>
  </div>
</template>

<style lang="sass">
  @import '../../styles/variables/colors.sass'

  .result-card
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
</style>
