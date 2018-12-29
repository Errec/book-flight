<template>
  <div class="main">
    <bar-search></bar-search>
    <tab-direction></tab-direction>
    <alert></alert>
    <result-box></result-box>
  </div>
</template>

<script>
  import BarSearch from './BarSearch'
  import TabDirection from './TabDirection'
  import Alert from './Alert'
  import ResultBox from './ResultBox'

  export default {
    components: {
      BarSearch,
      TabDirection,
      Alert,
      ResultBox
    }
  }
</script>