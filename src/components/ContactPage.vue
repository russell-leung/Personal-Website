<template>
	<div id="contactPage">
		<h1>Contact Me</h1>
		<div id="contactMessageContainer" v-if="showContactMessage">
			<font-awesome-icon
				:icon="['fas', 'x']"
				class="icon"
				style="float: right;"
				@click="hideContactMessage()"
			/>
			<h4 id="contactMessage">{{ contactMessage }}</h4>
		</div>
		<div id="contactContainer">
			<div id="loading-bar-spinner" class="spinner" style="display:none;">
				<div class="spinner-icon"></div>
			</div>
			<form id="contactForm" ref="contactForm" @submit.prevent="submitForm()">
				<div
					v-for="(fieldData, field) in formFields"
					:key="field"
				>
					<input
						:id="field"
						:name="field"
						:type="fieldData['type']"
						:placeholder="fieldData['placeholder']"
						:required="fieldData['required']"
					>
				</div>
				<input ref="submitButton" type="submit" value="Contact Me!" id="contact-form-submit-btn">
			</form>
			<div id="contactInfo">
				<div>
					<p><b>Contact Information</b></p>
					<p v-for="email in emails" :key="email"><a :href="'mailto:' + email">{{ email }}</a></p>
				</div>
				<br>
				<div>
					<p><b>Social Media</b></p>
					<p v-for="(mediaData, media) in socialMedia" :key="media">
						<a :href="mediaData['link']" target="_blank">
							<font-awesome-icon :icon="['fab', media]"></font-awesome-icon> {{ mediaData['handle'] }}
						</a>
					</p>
				</div>
				<br>
				<div>
					<p><b>Resume</b></p>
					<p><a href="../assets/Russell_Leung_Resume.pdf" download>Download Resume</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
	name: 'ContactPage',
	data () {
		return {
			formFields: {
				'fullName': {
					'type': 'text',
					'placeholder': 'Full Name',
					'required': true,
				},
				'email': {
					'type': 'email',
					'placeholder': 'Email',
					'required': true,
				},
				'message': {
					'type': 'text',
					'placeholder': 'Message',
					'required': true,
				},
			},
			emails: [
				'contact-me@russell-leung.com',
			],
			socialMedia: {
				'linkedin': {
					'handle': 'Russell Leung',
					'link': 'https://www.linkedin.com/in/russell-leung/',
				},
				'instagram': {
					'handle': 'ru.leung',
					'link': 'https://www.instagram.com/ru.leung/',
				},
			},
			showContactMessage: false,
			contactMessage: '',
		}
	},
	methods: {
		submitForm() {
			this.$refs.submitButton.style.disabled = "disabled";
			document.querySelector('#loading-bar-spinner').style.display = "block";
			let fullName = document.querySelector('#fullName').value;
			let email = document.querySelector('#email').value;
			let message = document.querySelector('#message').value;

			emailjs.send(
				'service_hqooctc',
				'template_r5zjfh7',{
					reply_to: fullName,
					message: message,
					email: email,
				},
				'KmBAJApgiWb5lMjxe'
			).then(() => {
				this.$refs.contactForm.reset();
				this.contactMessage = 'Thank you for contacting me! Expect to hear back soon!';
			}, (error) => {
				console.log(error);
				this.contactMessage = 'Form submission failed. Please try again.';
			}).finally(() => {
				this.$refs.submitButton.style.disabled = false;
				document.querySelector('#loading-bar-spinner').style.display = "none";
				this.showContactMessage = true;
				setTimeout(() => {
					this.showContactMessage = false;
				}, 10000);
			});
		},
		hideContactMessage() {
			this.showContactMessage = false;
		},
	}
}
</script>

<style scoped>
#contactPage {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
h1 {
	color: #F1A208;
	font-size: 6rem;
	margin: 10% 0 0 0;
}
#contactContainer {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 75%;
	background-color: #F1A208;
	color: white;
	padding: 5%;
	margin: 2% 0;
	border-radius: 1%;
}
#contactForm, #contactInfo {
	border: 1px solid white;
	width: 45%;
	padding: 4% 0;
	border-radius: 1%;
}
#contactForm {
	background-color: white;
}
::placeholder {
	color: #2c3e50;
}
input[type=text], input[type=email] {
	font-size: 1.5rem;
	width: 75%;
	padding: 4% 4%;
	margin: 1.5% 0;
	border: 1px solid #ccc;
	color: #2c3e50;
	border-radius: 1%;
	box-sizing: border-box;
}
input[type=submit] {
	font-size: 1.5rem;
	width: 75%;
	background-color: #2c3e50;
	color: white;
	padding: 4% 0;
	margin-top: 2%;
	border: none;
	border-radius: 1%;
	cursor: pointer;
}
#contactInfo p, #conactInfo a {
	font-size: 2rem;
	margin: 0;
}
a:active, a:visited, a:link {
	color: white;
	text-decoration: none;
}
#contactMessageContainer {
	background-color: #F1A208;
	border-radius: 1%;
	padding: 2%;
	margin: 2% 0 1% 0;
	color: white;
	width: 100%;
}
#contactMessageContainer h4 {
	font-size: 3rem;
	margin: 0;
}
.icon {
	font-size: 3em;
}
#loading-bar-spinner.spinner {
    position: absolute;
    z-index: 19 !important;
    animation: loading-bar-spinner 1s linear infinite;
}
#loading-bar-spinner.spinner .spinner-icon {
    width: 10rem;
    height: 10rem;
    border:  solid 4px transparent;
    border-top-color:  #2c3e50 !important;
    border-left-color: #2c3e50 !important;
    border-radius: 50%;
}
@keyframes loading-bar-spinner {
  0%   { transform: rotate(0deg);   transform: rotate(0deg); }
  100% { transform: rotate(360deg); transform: rotate(360deg); }
}
@media only screen and (max-width: 470px) {
	h1 {
		font-size: 3.8rem;
	}
	#contactContainer {
		width: 100%;
	}
	#contactMessageContainer h4 {
		font-size: 2rem;
	}
	#contactInfo p, #contactInfo a {
		font-size: 1rem;
	}
	input[type=text], input[type=email], input[type=submit] {
		font-size: 1.25rem;
	}
	.icon {
		font-size: 2em;
	}
}
@media only screen and (max-width: 900px) {
	#contactForm, #contactInfo  {
		width: 90%;
	}
	#contactInfo {
		margin: 5% 0 0 0;
	}
}
</style>
