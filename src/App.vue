<template>
    <div id='app'>
        <div v-if=!user>
            <app-login></app-login>
        </div>
        <div v-else>
            <app-header></app-header>
            <div class='app_body'>
                <app-sidebar></app-sidebar>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header/Header';
    import Sidebar from './components/sidebar/Sidebar';
    import Login from './components/login/Login';
    import db from './firebase';

    export default {
        name: 'App',
        created() {
            db.collection('rooms').onSnapshot(snapshot => (
                this.$store.dispatch('loadChannels', snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                })))
            ));
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
        components: {
            'app-header': Header,
            'app-sidebar': Sidebar,
            'app-login': Login,
        }
    }
</script>

<style>
    * {
        margin: 0;
    }

    body {
        --slack-color: #3f0f40;
    }

    .app_body {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
