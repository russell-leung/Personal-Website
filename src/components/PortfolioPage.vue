<template>
	<div id="portfolioPage">
		<div>
			<h1>Portfolio</h1>
			<h2>Here is a few projects I've worked on!</h2>
		</div>
		<div id="projectsContainer">
			<div
				v-for="(projectData, projectName) in projects"
				:key="projectName"
				class="projectCardContainer"
			>
				<div class="projectCard">
					<img
						:alt="projectData['title']"
						:src="require(`../assets/portfolioImages/${projectName}.png`)"
					>
					<h3>{{ projectData['title'] }}</h3>
					<p>{{ projectData['description'] }}</p>
					<p><a :href="projectData['link']" target="_blank">Check it out!</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PortfolioPage',
	data () {
		return {
			projects: {
				// More Projects To Be Added
				personalPortfolioWebsite: {
					'title': 'Personal Portfolio Website',
					'link': 'https://github.com/russell-leung/personal-portfolio',
					'description': 'A personal portfolio website to showcase my skills as a software developer, ' +
									'built with Vue.js, HTML, and CSS. In fact it is the website that you are currently viewing.',
				},
			},
		}
	}
}
</script>

<style scoped>
h1 {
	color: #F1A208;
	font-size: 6rem;
	margin: 10% 0 0 0;
}
h2 {
	font-size: 4rem;
	margin: 0;
}
#projectsContainer {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
.projectCardContainer {
	display: flex;
	justify-content: space-evenly;
	margin: 2% 1%;
	width: 45%;
}
.projectCard {
	background-color: #F1A208;
	color: white;
	padding: 5%;
}
.projectCard img {
	box-sizing: border-box;
	max-height: 100%;
	max-width: 100%;
	margin: 0 0 1% 0;
	border: 1px solid white;
}
.projectCard h3 {
	font-size: 2rem;
	margin: 0;
}
.projectCard p {
	font-size: 1.5rem;
	margin: 0;
}
.projectCard a {
	color: white;
}
@media only screen and (max-width: 470px) {
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 3rem;
	}
	.projectCard h3 {
		font-size: 1.5rem;
	}
	.projectCard p {
		font-size: 1.25rem;
	}
}
@media only screen and (max-width: 900px) {
	.projectCardContainer {
		width: 90%;
	}
}
</style>
