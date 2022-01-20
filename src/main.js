import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAuRhUe56L9-wo_573J_cb1TNSvHgSIxdY",
  authDomain: "my-address-pj-cad07.firebaseapp.com",
  projectId: "my-address-pj-cad07",
  storageBucket: "my-address-pj-cad07.appspot.com",
  messagingSenderId: "672502613506",
  appId: "1:672502613506:web:72f1b55c3ad8ce8851c91b",
  measurementId: "G-VHH0XWZY4H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.getAnalytics(app);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
