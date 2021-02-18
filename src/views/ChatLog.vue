<template>
    <div >
      <Chat v-if="user"></Chat> 
    <Login v-else></Login>
    </div>
</template>
<script>
import Chat from '../components/Chat'
import Login from '../components/Login'
import firebase from 'firebase'

export default {
    data() {
        return {
           user: firebase.auth().currentUser 
        }
    },
    name: 'ChatLog',
    components: {
        Chat,Login
    }
}
</script>
