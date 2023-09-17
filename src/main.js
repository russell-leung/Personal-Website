import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import tech stack icons */
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

/* import other miscellaneous icons */
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
	faJs, faPython, faJava, faHtml5, faCss3,
	faPhp, faLinux, faGit, faX, faLinkedin, faInstagram
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
