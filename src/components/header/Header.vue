<template>
    <div class="header">
        <div class="header-left">
            <Avatar class="header-avatar"
                    :src="user.photoURL"
                    :username="user.displayName"
            ></Avatar>
            <icon class="header-icon" name="access_time" scale="2"></icon>
        </div>
        <div class="header-center">
            <icon class="header-icon" name="search" scale="2"></icon>
            <input placeholder="Search Slack"/>
        </div>
        <div class="header-right">
            <icon class="header-icon" name="help_outline" scale="2"></icon>
        </div>
    </div>
</template>

<script>
    import Avatar from 'vue-avatar'

    export default {
        computed: {
          user() {
              return this.$store.getters.getUser;
          }
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        background-color: var(--slack-color);
        color: white;
    }

    .header-left {
        flex: 0.3;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .header-left > .header-icon {
        margin-left: auto;
        margin-right: 30px;
    }

    .header-center {
        flex: 0.4;
        background-color: #421f44;
        text-align: center;
        display: flex;
        padding: 0 50px;
        color: grey;
        border: 1px gray solid;
        border-radius: 6px;
    }

    .header-center > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 35vw;
    }

    .header-right {
        flex: 0.3;
        display: flex;
        align-items: flex-end;
    }

    .header-right > .header-icon {
        margin-left: auto;
        margin-right: 20px;
    }
</style>
