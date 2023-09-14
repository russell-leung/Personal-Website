<template>
    <div id="navBar">
      <div>
        <h1 id="logo">Russell Leung</h1>
        <!-- TODO: Replace with logo of some sort-->
        <!-- <img alt="Russell Leung logo" src="../assets/logo.png"> -->
      </div>
      <div id="links"> 
        <ul>
            <li 
              v-for="(url, pageName, index) in links"
              :key="index"
            >
              <a rel="noopener" :href="url">{{pageName}}</a>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: {
        'Home': '#home_page',
        'Portfolio': '#portfolio_page',
        'Experience': '#experience_page',
        'About': '#about_page',
        'Contact': '#contact_page',
      },
    }
  }
}
</script>

<style scoped>
#navBar {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
}
/* TODO: Add a Media Query for Phones */
#logo {
  margin: 0;
  color: #F1A208;
}
#links {
  display: flex;
  width: 50%;
}
ul {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #F1A208;
} 
</style>
