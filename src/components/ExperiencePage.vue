<template>
	<div id="experiencePage">
		<h1>Experience</h1>
		<div>
			<div id="techStackContainer">
				<div id="techStackIconsContainer">
					<div
						v-for="(iconDescription, icon) in techStackIcons"
						:key="icon"
					>
						<font-awesome-icon
							:icon="['fab', icon]"
							:alt="iconDescription"
							:id="icon"
							class="icon techStackIcon"
							@click="changeTechStackDescription(icon)"
						/>
					</div>
				</div>
				<div id="techStackDescriptionContainer" ref="techStackDescriptionContainer">
					<font-awesome-icon
						:icon="['fas', 'x']"
						class="icon"
						id="closeDescription"
						style="float: right;"
						@click="hideTechStackDescription()"
					/>
					<h4 id="techStackDescriptionTitle" ref="techStackDescriptionTitle">Click an Icon above to learn more!</h4>
					<p id="techStackDescription" ref="techStackDescription"></p>
				</div>
			</div>
			<div id="experienceContainer">
				<div id="workExperienceContainer">
					<h4>Work Experience</h4>
					<div class="experienceSection">
						<div
							v-for="(experienceDetails, experience) in workExperience"
							:key="experience"
							class="experienceCard"
						>
							<p class="experienceCardTitle"><b>{{ experience }}</b></p>
							<ul>
								<p class="experienceCardSecondaryTitle"><b><u>{{ experienceDetails['jobTitle'] }}</u></b></p>
								<li
									v-for="(bulletPoint, index) in experienceDetails['experienceBulletPoints']"
									:key="index"
									class="experienceCardBulletPoint"
								> 
									{{ bulletPoint }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="educationExperienceContainer">
					<h4>Education Experience</h4>
					<div class="experienceSection">
						<div
							v-for="(experienceDetails, experience) in educationExperience"
							:key="experience"
							class="experienceCard"
						>
							<p class="experienceCardTitle"><b>{{ experience }}</b></p>
							<ul>
							<p class="experienceCardSecondaryTitle"><b><u>{{ experienceDetails['degree'] }}</u></b></p>
							<li
								v-for="(bulletPoint, index) in experienceDetails['experienceBulletPoints']"
								:key="index"
								class="experienceCardBulletPoint"
							> 
								{{ bulletPoint }}
							</li>
						</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExperiencePage',
	data () {
		return {
			currentTechStackIcon: null,
			techStackIcons: {
				'js': 'I have 3+ years of experience with JavaScript (JS). ' +
						'I\'ve used JS, Node.js, JQuery, and Vue.js both in personal projects, ' +
						'such as this website you\'re viewing currently, as well as in ' +
						'my prior internship experience at HydraCor, LLC as a Software Developer Intern.',
				'python': 'I have 4+ years of experience with Python. ' +
							'I\'ve used Django, Flask, and NumPy in personal projects and classes. ' +
							'I\'m familiar with Python Object Oriented Programming and Data Structures.',
				'java': 'I have about a year of experience using Java. ' +
						'I earned a 5 on the AP Computer Science A test, and am familiar with basic ' +
						'Java Object Oriented Programming and Algorithms.',
				'html5': 'I have 4+ years of experience using HTML (HyperText Markup Language) ' +
							'via multiple classes and projects, like the website you are viewing now. ' +
							'You can find more examples on my github (https://github.com/russell-leung)',
				'css3': 'I have 4+ years of experience using CSS (Cascading Style Sheets) ' +
						'throught many projects and classes, similar to HTML as they go hand in hand. ' +
						'I also have experience using TailwindCSS and Bootstrap.',
				'php': 'I have about 2 years of experience using PHP via personal projects ' +
						'and my internship at HydraCor, LLC. I have experience using CakePHP, a ' +
						'PHP framework. I\'ve used PHP to create API endpoints and write server-side ' +
						'web application logic along with SQL and MariaDB.',
				'linux': 'I have about a year of experience with Linux. I\'ve used Linux (Ubuntu) ' +
							'during my internship at HydraCor, LLC. I\'m also familiar with Unix (MacOS).',
				'git': 'I\'ve been using Git and GitHub for 4+ years now. I\'m very familiar ' +
						'with version control. Checkout my github @russell-leung (<a>https://github.com/russell-leung</a>) ' +
						'for some of my projects!',
			},
			workExperience: {
				'HydraCor': {
					'jobTitle': 'Software Developer Intern',
					'experienceBulletPoints': [
						'Created a QR Code generation and display system',
						'Discovered and squashed bugs',
						'Advised and aided junior developers and peers',
						'Refactored and optimized legacy code throughout the codebase',
						'Authored unit tests and database migrations',
					],
				},
				'Haverhill Public Schools': {
					'jobTitle': 'Senior Additive Manufacturing Instructor',
					'experienceBulletPoints': [
						'Instructed middle and elementary students',
						'Developed a comprehensive 3D printing curriculum',
						'Innovated by broadening the program to encompass underrepresented STEM demographics',
						'Led the program, overseeing junior STEM interns',
					],
				},
			},
			educationExperience: {
				'Northeastern University': {
					'degree': 'B.S. Computer Science',
					'experienceBulletPoints': [
						'Freshman (est. Grad Date 2027)',
						'Concentration in Software Engineering',
						'Northeastern Honors',
						'NEU Oasis',
					],
				},
				'Haverhill High School': {
					'degree': 'High School Diploma',
					'experienceBulletPoints': [
						'CVTE Computer Science Academy',
						'STEM Academy',
						'Classical Academy',
						'Advanced Placement (AP)',
						'Dual Enrollment @ NECC',
					]
				},
			},
		}
	},
	methods: {
		changeTechStackDescription(icon) {
			if (this.currentTechStackIcon) {
				document.querySelector(`#${this.currentTechStackIcon}`).style.color = 'inherit';
			}
			this.currentTechStackIcon = icon;
			document.querySelector(`#${icon}`).style.color = '#F1A208';
			this.$refs.techStackDescriptionTitle.innerHTML = icon.toUpperCase();
			this.$refs.techStackDescription.innerHTML = this.techStackIcons[icon];
			this.$refs.techStackDescriptionContainer.style.display = 'block';
		},
		hideTechStackDescription() {
			if (this.currentTechStackIcon) {
				document.querySelector(`#${this.currentTechStackIcon}`).style.color = 'inherit';
			}
			this.$refs.techStackDescriptionContainer.style.display = 'none';
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
.icon:hover {
	cursor: pointer;
}
#techStackIconsContainer {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: 2% 0;
	justify-content: space-evenly;
}
.techStackIcon {
	font-size: 7em;
}
.techStackIcon:hover {
	color: #F1A208 !important;
}
#techStackDescriptionContainer {
	background-color: #F1A208;
	border-radius: 1%;
	padding: 2%;
	margin: 0 0 2% 0;
	color: white;
}
#techStackDescriptionTitle {
	font-size: 3rem;
	margin: 0;
}
#techStackDescription {
	font-size: 2rem;
	margin: 0;
}
#closeDescription {
	font-size: 3em;
}
#experienceContainer {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	width: 100%;
}
#experienceContainer h4 {
	margin: 0;
	font-size: 3rem;
}
#workExperienceContainer, #educationExperienceContainer {
	width: 45%;
	background-color: #F1A208;
	color: white;
	padding: 3% 0;
	margin: 2% 0;
	border-radius: 1%;
}
.experienceSection p, .experienceSection ul {
	margin: 0;
}
.experienceCard {
	background-color: white;
	color: #2c3e50;
	margin: 3% 5%;
	padding: 1%;
}
.experienceCardTitle {
	font-size: 2.5rem;
}
.experienceCardSecondaryTitle {
	font-size: 1.75rem;
	text-align: left;
}
.experienceCardBulletPoint {
	font-size: 1.5rem;
	text-align: start;
}
@media only screen and (max-width: 470px) {
	h1 {
		font-size: 3.8rem;
	}
	.techStackIcon {
		font-size: 5em;
	}
	#techStackDescriptionTitle {
		font-size: 2rem;
	}
	#techStackDescription {
		font-size: 1.5rem;
	}
	#closeDescription {
		font-size: 2em;
	}
	#experienceContainer h4 {
		font-size: 2rem;
	}
	.experienceCardTitle {
		font-size: 2rem;
	}
	.experienceCardSecondaryTitle {
		font-size: 1.25rem;
	}
	.experienceCardBulletPoint {
		font-size: 1rem;
	}
}
@media only screen and (max-width: 900px) {
	#workExperienceContainer, #educationExperienceContainer  {
		width: 100%;
	}
}
</style>
