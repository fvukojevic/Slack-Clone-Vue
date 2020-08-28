<template>
    <div class="message">
        <img :src="userImage" alt="" />
        <div class="message_info">
            <h4>
                {{ user }} <span class="message_timestamp">{{ new Date(timestamp.toDate().toUTCString())}}</span>
            </h4>
            <p>
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: String,
            userImage: String,
            user: String,
            timestamp: Object,
        }
    }
</script>

<style scoped>
    .message {
        display: flex;
        align-items: center;
        padding: 20px;
    }

    .message > img {
        height: 50px;
        width: 50px;
        object-fit: contain;
    }

    .message_info {
        padding-left: 10px;
    }

    .message_timestamp {
        color: grey;
        font-weight: 300;
        font-size: 13px;
    }
</style>
