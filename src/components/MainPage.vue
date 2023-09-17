<template>
	<div>
		<NavBar />
		<HomePage />
		<PortfolioPage />
		<ExperiencePage />
		<ContactPage />
	</div>
</template>
	
<script>
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
import PortfolioPage from '../components/PortfolioPage.vue'
import ExperiencePage from './ExperiencePage.vue';
import ContactPage from './ContactPage.vue';
	
export default {
	name: 'MainPage',
	components: {
		NavBar,
		HomePage,
		PortfolioPage,
		ExperiencePage,
		ContactPage,
	}
}
</script>
	