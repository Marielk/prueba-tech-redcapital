import Vue from 'vue'
import App from './App.vue'
import axios from '../node_modules/axios';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

