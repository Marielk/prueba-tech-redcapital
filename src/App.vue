<template>
  <div id="app">
    <mainContainer :info = "infoUser" />
    <button>Recargar Datos</button>
  </div>
</template>

<script>
import Vue from 'vue'
import mainContainer from './components/mainComponent.vue'

export default {
  name: 'app',
  components: {
    mainContainer
  },
  data() {
  let infoUser = [];

    this.$axios.get('https://randomuser.me/api/')
        .then(function (response) {
        let fullResponse = Object.entries(response);
        let infoAndResult = fullResponse[0][1];
        let userDataFull = infoAndResult.results[0]
        Vue.set(mainContainer.props, 'info', userDataFull)
        infoUser.push(userDataFull);    
        //console.log(infoUser);
      })
      .catch(function (error) {
        console.log(error);
      });

  return {
    infoUser
  }
}
 
  
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
