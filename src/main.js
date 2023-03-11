import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* importo icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'
// alias
import {
	faStar as faStarRegular,
	faUser,
} from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarRegular, faUser)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

  