<template>
    <div>
        <NavBar></NavBar>
        <HomePage></HomePage>
        <PortfolioPage></PortfolioPage>
        <ExperiencePage></ExperiencePage>
    </div>
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
import PortfolioPage from '../components/PortfolioPage.vue'
import ExperiencePage from './ExperiencePage.vue';
  
export default {
  name: 'MainPage',
  components: {
    NavBar,
    HomePage,
    PortfolioPage,
    ExperiencePage,
  }
}
</script>
  