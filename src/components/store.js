import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../node_modules/axios';
Vue.use(Vuex)

//Store 
  const store = new Vuex.Store({
    state: {
      userInfo : {
        name: "Mariel Quezada",
        since: "2",
        profilePicture: "http://i64.tinypic.com/2dkyelv.jpg",
        age: 27,
        location: "Santiago",
        mail: "mi.mail@example.com"
      }
    },
    mutations: {
  
      refreshData (state) {
       axios.get('https://randomuser.me/api/')
          .then(function (response) {
          let fullResponse = Object.entries(response);
          let infoAndResult = fullResponse[0][1];
          let userDataFull = infoAndResult.results[0]
          // aca deberia desglozar el objeto en las propiedades que necesito para asignarlas 
          //console.log(userDataFull);
          let name = `${userDataFull.name.first} ${userDataFull.name.last}`;
          let nameMayusc = name.toUpperCase();
          let since = userDataFull.registered.age;
          let profilePicture = userDataFull.picture.large;
          let age =  userDataFull.dob.age;
          let location = userDataFull.location.city;
          let email = userDataFull.email; 
          //aqui abajo  
          state.userInfo = {
            name: nameMayusc,
            since: since,
            profilePicture:profilePicture ,
            age: age,
            location: location,
            mail: email
          }
          })
        .catch(function (error) {
          console.log(error);
        });  
      }
    },
    actions: {
      refreshData(context){
        context.commit('refreshData')
      }
    },
    getters: {
      updateComponent: state => {
        return state.userInfo
      }
    }
  })
  export default {
    store
  }