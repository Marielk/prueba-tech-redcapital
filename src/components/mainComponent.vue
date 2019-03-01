<template>
  <div class="hello">
    <h2>{{ info.userInfo.name}}</h2>
    <h6>{{ info.userInfo.since  }}</h6>
    <h6>{{ info.userInfo.profilePicture  }}</h6> 
    <h6>{{ info.userInfo.age }}</h6> 
    <h6>{{ info.userInfo.location }}</h6> 
    <h6>{{ info.userInfo.mail }}</h6>   
    <button v-on:click="getData">Recargar Datos</button>
  </div>
</template>

<script>
import store from './store';
export default {
  name: 'mainContainer',
  props: ['info', 'userName'],

 data() {
  this.$props.info = store.store.state;
  return {
  }
},
  methods: {
   getData() {   
    store.store.commit('refreshData');
    store.store.getters('updateComponent');
   }
  }   
}

</script>


<style scoped>

</style>
