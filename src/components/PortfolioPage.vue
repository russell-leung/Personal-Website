<template>
	<div id="portfolioPage">
		<div>
			<h1>Portfolio</h1>
			<h2>Here is a few projects I've worked on!</h2>
		</div>
		<div
			v-for="(projectDescription, projectName, index) in projects"
			:key="projectName"
			id="projectsContainer"
		>
		<!-- TODO: Name image the same as project name so i can use something like :href="../assets/{projectName}.png" -->
			<div id="projectContainer" :class="{ reverseDirection: (index % 2 == 1) }">
				<div id="projectDescription">
					<h3>
						{{ projectName }}
					</h3>
					<p>
						{{ projectDescription }}
					</p>
				</div>
				<div id="projectVisual">
					Picture/Link to project
					Probably link to github
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
				projectName1: 'ss',
				projectName2: 'ss',
				projectName3: 'ss',
				projectName4: 'ss',
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
.reverseDirection {
	flex-direction: row-reverse;
}
#projectContainer {
	display: flex;
	justify-content: space-evenly;
}
#projectDescription, #projectVisual {
	width: 45%;
	/* TODO: remove background/find perm solution */
	/* TODO: change border radius to 1% */
	border: 1px solid #2c3e50;
	padding: 2% 0;
	margin: 2% 0;
}
#projectDescription {
	background-color: #F1A208;
	color: white;
}
</style>
