<template>
  <div class="main">
    <bar-search></bar-search>
    <tab-direction></tab-direction>
  </div>
</template>

<script>
  import BarSearch from './BarSearch'
  import TabDirection from './TabDirection'

  export default {
    components: {
      BarSearch,
      TabDirection
    }
  }
</script>