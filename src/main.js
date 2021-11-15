import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'tailwindcss-gradients'
import './assets/css/style.css'
import 'vue-scrollto'
import 'tailwind-scroll-behavior'
import router from './router'

import VueKinesis from "vue-kinesis";
import VueParticles from 'vue-particles';



createApp(App).use(router).use(VueParticles).use(VueKinesis).mount('#app')

