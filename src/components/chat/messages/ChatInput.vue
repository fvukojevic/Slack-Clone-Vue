<template>
    <div class="chat_input">
        <form action="">
            <input :placeholder="`Message #${channel}`" :value="input" @change="e => setInput(e.target.value)">
            <button type="submit" @click="sendMessage">SEND</button>
        </form>
    </div>
</template>

<script>
    import db from "../../../firebase";
    import firebase from 'firebase';

    export default {
        data() {
          return {
              input: ''
          }
        },
        props: {
            channel: String,
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            channelId() {
                return this.$store.getters.getRoomId
            }
        },
        methods: {
            sendMessage(e) {
                console.log(this.channelId);
                console.log(this.user);
                console.log(this.input);
                e.preventDefault();
                if(this.channelId) {
                    db.collection('rooms').doc(this.channelId).collection('messages')
                    .add({
                        message: this.input,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        user: this.user.displayName,
                        userImage: this.user.photoURL
                    })
                    this.input = '';
                }
            },
            setInput(value) {
                this.input = value;
            }
        }
    }
</script>

<style scoped>
    .chat_input {
        border-radius: 20px;
    }

    .chat_input > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .chat_input > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
    }

    .chat_input > form > button {
        display: none!important;
    }
</style>
