<template>
  <div id="app" :style="{paddingTop:getPaddingTop}" v-scroll:throttle="{fn: onScroll, throttle: 300}">
    <Header :headerPassedTop="headerPassedTop" :headerHeight="headerHeight"></Header>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  },
  data () {
    return {
      headerHeight: 60, // <Header> Height value in px
      headerPassedTop: false
    }
  },
  methods: {
    onScroll (e, position) {
      this.headerPassedTop = (position.scrollTop >= this.headerHeight * 1.6)
    }
  },
  computed: {
    getPaddingTop () {
      if (this.headerPassedTop) {
        return this.headerHeight + 'px'
      }
    }
  },
}
</script>

<style lang="sass">
  @import 'styles/base/normalize'
  @import 'styles/base/reset'
  @import 'styles/variables/colors'


  @import 'styles/modules/general'
  @import 'styles/modules/buttons'

  #app
    width: 100%
    height: 100%
    position: relative
    background-color: $MMbgColor
    color: $MMGrey
    overflow-y: scroll
    overflow-x: hidden
    &::-webkit-scrollbar
      display: none
    -ms-overflow-style: none
    overflow: -moz-scrollbars-none

  .app--padding-top
    padding-top: 60px

  @media screen and (max-width: 800px)
    #app
      box-shadow: 8px 9px 47px -8px rgba(0,0,0,0.75)
      padding: 12px
      max-width: 450px
      position: absolute
      height: auto
      overflow-y: none
      top: 24px
      right: 0
      left: 0
      margin: 0 auto 24px auto
  @media screen and (min-width: 1000px)
    #app
      box-shadow: 8px 9px 47px -8px rgba(0,0,0,0.75)
      padding: 12px
      position: absolute
      max-width: 1200px
      height: auto
      overflow-y: none
      top: 24px
      right: 0
      left: 0
      margin: 0 auto 24px auto
</style>
