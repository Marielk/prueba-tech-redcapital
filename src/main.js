import Vue from 'vue'
import App from './App.vue'
import axios from '../node_modules/axios';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')

