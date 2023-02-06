import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import VueSession from 'vue-session'

const firebaseConfig = {
    apiKey: "AIzaSyDWUOa5GCeA04cwqQsgDZ5Y8-Fs5OpGtmY",
  authDomain: "thesehuntimes.firebaseapp.com",
  databaseURL: "https://thesehuntimes-default-rtdb.firebaseio.com",
  projectId: "thesehuntimes",
  storageBucket: "thesehuntimes.appspot.com",
  messagingSenderId: "517253987073",
  appId: "1:517253987073:web:226db7bc4ea7289fb8f900"
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

var sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
