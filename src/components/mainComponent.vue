<template>
  <div class="mainContainer">
    <div>
      <b-card no-body class="overflow-hidden card" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col class="imgContent" md="6">
            <b-card-img v-bind:src= "info.userInfo.profilePicture" class="profileImg" />
          </b-col>
          <b-col md="6">
            <b-card-text>
              <h6 class="since">Antiguedad: {{ info.userInfo.since  }}años</h6>
              <h2 class="title">{{ info.userInfo.name}}</h2>
              <b-row class="underRow" no-gutters>
                <h6 class="underInfo">Edad: {{ info.userInfo.age }}</h6> 
                <h6 class="underInfo city">Ciudad: {{ info.userInfo.location }}</h6> 
              </b-row>
              
              
              
            </b-card-text>
          </b-col>
        </b-row>
        <b-row class="cardFooter">
                <h6 class="mailTxt">{{ info.userInfo.mail }}</h6>   
          <b-button variant="outline-primary" class="reloadButton" v-on:click="getData">Recargar Datos</b-button>
        </b-row>  
      </b-card>
    </div>
   
  </div>
</template>

<script>
import Vue from 'vue'
import store from './store';
import BCard from 'bootstrap-vue/es/components/card/card'
Vue.component('b-card', BCard)
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
   }
  }   
}

</script>


<style scoped>
  .mainContainer{
    text-align: -webkit-center;
  }
  .card{
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
  .title{
    width: max-content;
    margin-right: 64%;
    font-size: xx-large;
    color: hsl(0, 0%, 13%);
    font-weight: 700;
  }
  .imgContent{
    max-width: 35%;
  }
  .profileImg{
    border-radius: 150px;
    height: 100px;
    width: 50%;
    margin-top: 20%;
  }

  .since{
    margin-top: 6%;
    text-align: right;
    margin-right: 19%;
    font-size: xx-small;
    color: hsl(0, 0%, 45%);
    font-weight: 400;
  }
  .underRow{
    float: left;
  }

  .card-text{
    width: max-content;
    height: 120px;
  }
  .underInfo{
    
    font-size: small;
    margin-top: 4%;
    color: hsl(0, 0%, 29%);
    font-weight: 400;
  }

  .city{
    margin-left: 10px;
  }
  .mail{
    margin-top: 12%;
    margin-left: 1%;
  }
  .mailTxt{
    color: #133f84;
    margin-left: 215px;
  }
  .cardFooter{
    background-color: hsl(0, 0%, 97%);
  }
  .reloadButton{
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 65%;
    background-color: #133f84;
    color: white;
  }
</style>
