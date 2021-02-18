<template>
   <div >
  <b-button variant="success" @click="loginSubmit">Login </b-button>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  methods: {
    loginSubmit(){
        const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).catch(console.log)
    
    }
  },
}
</script>