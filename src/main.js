import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyAShE7pOiMnFZOT_SKqm3dbnBZCrbLnmjU",
    authDomain: "dvbue-firebase.firebaseapp.com",
    databaseURL: "https://dvbue-firebase.firebaseio.com",
    projectId: "dvbue-firebase",
    storageBucket: "dvbue-firebase.appspot.com",
    messagingSenderId: "877702329177",
    appId: "1:877702329177:web:77962af77e889d28475248",
    measurementId: "G-CR8HXE86PT"
};
// Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
