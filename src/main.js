import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'


// Vue.use(BootstrapVue)

// Vue.use(IconsPlugin)

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
<script src="https://kit.fontawesome.com/8d5aa983d2.js" crossorigin="anonymous"></script>
