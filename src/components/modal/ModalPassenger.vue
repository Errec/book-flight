<template>
  <div class="modal-passenger">

    <p class="modal-passenger__title">Passageiros e classe do voo</p>

    <div class="modal-passenger__wrapper">

      <div class="modal-passenger__summary">
        <p>{{adults + children + babies}}</p>
        <div>
        <p>{{passengerType}}</p>
        <p>{{cabinType}}</p>
        </div>
      </div>
      <div class="modal-passenger__form">
        <div class="modal-passenger__passenger-select modal-passenger__select-adults" :class="{'adult_babies':adult_babies_check}">
            <label> Adultos
            </label>
              <select v-model.number="adults">
                <option v-for="n in maxAdults">
                  {{ n }}
                </option>
              </select>
        </div>

        <div class="modal-passenger__passenger-select modal-passenger__select-children">
            <label> Crianças <br><span>2 a 11 anos</span></br>
            </label>
              <select v-model.number="children">
                <option v-for="(n, i) in maxChildren">
                  {{ i }}
                </option>
              </select>
        </div>

        <div class="modal-passenger__passenger-select modal-passenger__select-babies" :class="{'adult_babies':adult_babies_check}">
            <label> Bebês <br><span>0 a 23 meses</span></br>
            </label>
              <select v-model.number="babies">
                <option v-for="(n, i) in maxBabies">
                  {{ i }}
                </option>
              </select>
          
        </div>

        <div class="modal-passenger__select-cabin">
            <label> Classe do Voo
            </label>
            <select v-model="cabinType">
              <option value="Classe econômica">Classe econômica</option>
              <option value="Classe executiva">Classe executiva</option>
            </select>
        </div>

        <button class="mm-button" type="button" @click="validadePassengers">Confirmar</button>
      </div>
    </div>

  </div>
</template>

<script>
  
  export default {
    data () {
      return {
        adults: 1,
        children: 0,
        babies: 0,
        maxAdults: 10,
        maxChildren: 11,
        maxBabies: 11,
        cabinType: 'Classe econômica',
        adult_babies_check: false
      }
    },
    computed: {
      passengerType () {
        if((this.children != 0 || this.babies != 0)) {
          return "PASSAGEIROS"
        } else if (this.adults > 1) {
          return "ADULTOS"
        } else {
          return "ADULTO"
        }
      }
    },
    methods: {
      validadePassengers () {
        if (this.babies > this.adults) {
          this.adult_babies_check = true
          this.$swal({
            type: "warning",
            text: "O número de bebês deve ser de 1 para cada adulto"
          }
          )
        } else {
          this.adult_babies_check = false
          this.$emit('confirmForm')
          let payload = {
            cabin: this.cabinType === 'Classe econômica' ? 'EC' : 'EX',
            adults: this.adults,
            children: this.children,
            infants: this.babies
          }
          this.$store.dispatch('addPassengerData', payload)
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../../styles/variables/colors.sass'
  .mm-button
    height: 46px
    width: 100%
    display: block
    margin: 0 auto
    font-weight: bold
    font-size: 1rem

  .modal-passenger
    padding: 12px

  .modal-passenger__title
    font-size: 0.9rem
    margin-bottom: 8px

  .modal-passenger__summary
    display: flex
    align-items: center
    border-bottom: solid 1px $MMGreen
    padding: 8px
    text-transform: uppercase
    &>p
      font-weight: bold
      font-size: 1rem
      margin-right: 4px
    div
      font-size: 0.6rem

  .modal-passenger__wrapper
    font-weight: bold
    border: solid 1px $MMGreen
    box-shadow: 4px 4px 0 hsla(200,7%,91%,.5)

  .modal-passenger__form
    padding: 12px
  .modal-passenger__passenger-select
    display: flex
    margin-bottom: 16px
    label
      font-size: 0.9rem
      text-transform: uppercase
      flex: 1
    select
      text-transform: uppercase
      height: 32px
      width: 54px
      box-shadow: 4px 4px 0 hsla(200,7%,91%,.5)
      border: solid 1px $MMGreen
      padding-left: 4px
      color: $MMGreen
      font-weight: bold
      background:
        color: transparent

  .modal-passenger__select-cabin
    position: relative
    font-weight: 100
    font-size: 0.9rem
    margin: 16px 0
    padding-top: 12px
    &:after
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 1px
      background: $MMGreen
    label
      display: block
    select
      box-shadow: 4px 4px 0 hsla(200,7%,91%,.5)
      height: 28px
      background-color: transparent
      border: solid 1px $MMGreen
      color: $MMBlue
      font-weight: bold
      font-size: 0.85rem
      width: 100%
      display: block
      margin: 0 auto
      margin-top: 12px



  .modal-passenger
    z-index: 100
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background:
      color: rgba($MMLight, 0.95)

  .adult_babies
    color: $MMRed
    background
      color: $MMRed
    select
      border: solid 1px $MMRed
      color: $MMRed
</style>