<template>
  <MainPage></MainPage>
</template>
<!-- TODO: run script to fix tab spaces / make them all 4 spaces -->
<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2.5% 5% 5% 5%;
  word-break: break-word;
}
</style>
