<template>
	<div id="navBar">
		<div>
			<h1 class="logo" id="logoLarge">Russell Leung</h1>
			<h1 class="logo" id="logoSmall">RL</h1>
		</div>
		<div id="linksContainer"> 
			<ul id="links">
				<li
				v-for="(url, pageName, index) in links"
				:key="index"
				>
					<a rel="noopener" :href="url">{{pageName}}</a>
				</li>
			</ul>
			<div>
				<font-awesome-icon
					:icon="['fas', 'bars']"
					id="hamburgerMenu"
					@click="openNavDropdown()"
				/>
			</div>
		</div>
	</div>
	<div id="navBarDropdown" v-if="showNavDropdown">
		<div
			v-for="(url, pageName, index) in links"
			:key="index"
			class="navBarDropdownItem"
			@click="closeDropdownMenu()"
		>
			<a rel="noopener" :href="url">{{pageName}}</a>
		</div>
	</div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            links: {
                'Home': '#',
                'Portfolio': '#portfolioPage',
                'Experience': '#experiencePage',
                'Contact': '#contactPage',
            },
			showNavDropdown: false,
        };
    },
	methods: {
		openNavDropdown() {
			this.showNavDropdown = !this.showNavDropdown;
		},
		closeDropdownMenu() {
			this.showNavDropdown = false;
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
.logo {
	margin: 0;
	color: #F1A208;
}
#logoSmall {
	display: none;
}
#linksContainer {
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
#hamburgerMenu {
	display: none;
	font-size: 3em;
}
#hamburgerMenu:hover {
	cursor: pointer;
}
#navBarDropdown {
	right: 0;
	z-index: 1;
	position: absolute;
	display: none;
	margin: 0 5% 0 0;
	width: 35%;
}
.navBarDropdownItem {
	background-color: #F1A208;
	color: white;
	font-size: 1.75rem;
	padding: 8% 15%;
	border: 1px solid white;
}
.navBarDropdownItem a:hover {
	color: white;
}
@media only screen and (max-width: 470px) {
	#hamburgerMenu {
		font-size: 2em;
	}
	#logoSmall {
		display: block;
	}
	#logoLarge {
		display: none;
	}
	.navBarDropdownItem {
		font-size: 1rem !important;
	}
}
@media only screen and (max-width: 600px) {
	.logo {
		font-size: 1.5em;
	}
	.navBarDropdownItem {
		font-size: 1.25rem;
	}
}
@media only screen and (max-width: 1200px) {
	#linksContainer {
		width: auto;
	}
	#links {
		display: none;
	}
	#hamburgerMenu, #navBarDropdown {
		display: block;
	}
}
</style>
