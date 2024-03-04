import './style.css';

import { createApp } from 'vue';
import App from './App.vue';

import { FocusTrap } from 'focus-trap-vue';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('FocusTrap', FocusTrap)
.mount('#app')
