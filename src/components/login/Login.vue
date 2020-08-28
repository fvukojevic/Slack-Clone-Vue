<template>
    <div class="login">
        <div class="login_container">
            <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="">
            <h1> Sign In to Slack</h1>
            <button class="login_button" @click="signIn">Sign in with Google</button>
        </div>
    </div>
</template>

<script>
    import {auth, provider} from "../../firebase";

    export default {
        methods: {
            signIn() {
                auth.signInWithPopup(provider).then((result) => {
                    this.$store.dispatch('setUser', result.user);
                }).catch(error => {
                    alert(error.message);
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        height: 100vh;
        background-color: #f8f8f8;
        display: grid;
        place-items: center;
    }

    .login_container > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    .login_button {
        margin-top: 50px;
        text-transform: inherit;
        background-color: #0a8d48;
        color: white;
        border-radius: 10px;
        border: none;
        height: 40px;
        font-size: 15px
    }

    .login_container {
        padding: 100px;
        text-align: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
</style>