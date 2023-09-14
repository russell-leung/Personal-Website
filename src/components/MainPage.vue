<template>
    <div>
        <NavBar></NavBar>
        <HomePage></HomePage>
    </div>
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
  
export default {
  name: 'MainPage',
  components: {
    NavBar, HomePage
  }
}
</script>
  