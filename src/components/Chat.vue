<template>
    <div>
       <header>
           <h1>Chat Grupal By Brandon</h1>
            
       </header>
       <section>
    <main>
    <div v-for="(msg, index) in messages " v-bind:key="'index-'+index" :class="['message', sentOrReceived(msg.userUID)]">
        <img :src="msg.photoURL" :alt="msg.displayName">
    <p>{{msg.text}}</p>
    </div>
    <div ref="scrollable"></div>
    </main>
    
    <form v-on:submit.prevent="sendMessage">
        <input v-model="message" type="text" placeholder="escriba tu mensaje:">
        <button :disabled="!message" type="submit">Enviar</button>
    </form>
    </section>
    <b-button variant="danger" @click="logout">Logout</b-button>
    </div>

</template>
<script>
import firebase from 'firebase'

export default {
    mounted(){
        this.db.collection('messages').orderBy('createdAt').onSnapshot(querySnap =>{
            this.messages = querySnap.docs.map(doc => doc.data())
        })
    },
    data() {
        return {
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: '',
            messages: [],

        }
    },
    methods: {
        logout(){
        firebase.auth().signOut
        },
        sentOrReceived(userUID){
            return userUID === this.user.uid ? 'sent' : 'received'
        },
        async sendMessage (event) {
            event.preventDefault()
            
            const messageInfo ={
                'userUID': this.user.uid,
                'displayName': this.user.displayName,
                'photoURL' : this.user.photoURL,
                'text': this.message,
                'createdAt': Date.now(),
            }
            await this.db.collection('messages').add(messageInfo)

             this.message = ''
             this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
        }
    },

}
</script>
<style scoped="scss" >
.message {
      display: flex;
      align-items: center;

      &.received {
        p {
          background: #e5e5ea;
          color: #000;
        }
      }

      &.sent {
        flex-direction: row-reverse;

        p {
          color: #fff;
          background: #0b93f6;
          align-self: flex-end;
        }
      }

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 2px 5px;
      }

      p {
        max-width: 500px;
        margin-bottom: 12px;
        line-height: 24px;
        padding: 10px 20px;
        border-radius: 25px;
        position: relative;
        color: #fff;
        text-align: center;
      }


    }

     

    

</style>>
