<template>
  <div id="app">
    <ResultCompiler />
  </div>
</template>

<script>
import ResultCompiler from './components/ResultCompiler.vue'

export default {
  name: 'App',
  components: {
    ResultCompiler,
  }
}
</script>

<style >
html {
  font-size: 70% !important;
}
</style>