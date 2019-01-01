<template>
  <div class="modal-passenger">

    <div class="modal-passenger__wrapper">

      <h4>Passageiros e classe do voo</h4>

      <div class="modal-passenger__summary">
        <p>{{adults + children + babies}}</p>
        <div>
        <p>{{passengerType}}</p>
        <p>{{cabinType}}</p>
        </div>
      </div>

      <div class="modal-passenger__select-adults" :class="{'adult_babies':adult_babies_check}">
          <label> Adultos
            <select v-model.number="adults">
              <option v-for="n in maxAdults">
                {{ n }}
              </option>
            </select>
          </label>
      </div>

      <div class="modal-passenger__select-children">
          <label> Crianças <br><span>2 a 11 anos</span></br>
            <select v-model.number="children">
              <option v-for="(n, i) in maxChildren">
                {{ i }}
              </option>
            </select>
          </label>
      </div>

      <div class="modal-passenger__select-babies" :class="{'adult_babies':adult_babies_check}">
          <label> Bebês <br><span>0 a 23 meses</span></br>
            <select v-model.number="babies">
              <option v-for="(n, i) in maxBabies">
                {{ i }}
              </option>
            </select>
          </label>
      </div>

      <div class="modal-passenger__select-cabin">
          <label> Classe do Voo
            <select v-model="cabinType">
              <option disabled value="Classe econômica">Classe econômica</option>
              <option value="Classe executiva">Classe executiva</option>
            </select>
          </label>
      </div>

      <button class="mm-button" type="button" @click="validadePassengers">Confirmar</button>

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
        if((this.adults + this.children + this.babies) == 1) {
          return "ADULTO"
        } else {
          return "PASSAGEIROS"
        }
      }
    },
    methods: {
      validadePassengers () {
        if (this.babies > this.adults) {
          console.log('eeerrrr')
          this.adult_babies_check = true
          this.$swal({
            type: "warning",
            text: "O número de bebês é de 1 para cada adulto"
          }
          )
        } else {
          this.adult_babies_check = false
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../../styles/variables/colors.sass'
  .mm-button
    max-width: 400px

  .adult_babies
    color: red
    background
      color: red

  .modal-passenger
    z-index: 100
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background:
      color: rgba($MMLight, 0.9)
</style>