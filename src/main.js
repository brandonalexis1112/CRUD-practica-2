import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBaFHfUx5O3ZBjgfqr2iuxM1ovYlC3Y5a8",
  authDomain: "vue-cv-chat.firebaseapp.com",
  projectId: "vue-cv-chat",
  storageBucket: "vue-cv-chat.appspot.com",
  messagingSenderId: "193874534728",
  appId: "1:193874534728:web:b1f171a07000c14a70537d"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => new Vue({
  router,
  render: h => h(App),
}).$mount('#app'))
