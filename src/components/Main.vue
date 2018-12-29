<template>
  <div class="main">
    <bar-search></bar-search>
    <tab-direction></tab-direction>
    <alert></alert>
  </div>
</template>

<script>
  import BarSearch from './BarSearch'
  import TabDirection from './TabDirection'
  import Alert from './Alert'

  export default {
    components: {
      BarSearch,
      TabDirection,
      Alert
    }
  }
</script>