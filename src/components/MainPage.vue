<template>
    <div>
        <NavBar></NavBar>
        <HomePage></HomePage>
        <PortfolioPage></PortfolioPage>
    </div>
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
import PortfolioPage from '../components/PortfolioPage.vue'
  
export default {
  name: 'MainPage',
  components: {
    NavBar, HomePage, PortfolioPage
  }
}
</script>
  