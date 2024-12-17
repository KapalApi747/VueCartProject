import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'

// Hier gaan we router.js inladen
/*import router from "./router";*/

const app = createApp(App);
const pinia = createPinia();

// Voor het mounten gaan we onze router inladen met de 3 pagina's.
app.use(pinia);
app.mount('#app')
