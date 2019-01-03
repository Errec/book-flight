<template>
  <div class="home">
    <Main/>
    <Footer/>
  </div>
</template>

<script>
  import Main from './Main.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'home',
    components: {
      Main,
      Footer
    },
  }
</script>