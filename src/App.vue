<template>
  <div id="app">
    
    <mainContainer :info = "infoUser" /> 
   
  </div>
</template>

<script>

import mainContainer from './components/mainComponent.vue'
import store from './components/store.js'
export default {
  name: 'app',
  components: {
    mainContainer
  },

data() {
  return {
    infoUser : store.store.state.userInfo
  }
},

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
