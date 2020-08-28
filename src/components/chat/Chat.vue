<template>
    <div class='chat'>
        <div class='chat_header'>
            <div class='chat_header_left'>
                <h4 class='chat_channel_name'>
                    <strong># {{ room.name }}</strong>
                    <icon class='chat_header_star_icon' name='star_border' scale='2'></icon>
                </h4>
            </div>
            <div class='chat_header_right'>
                <p>
                    <icon class='chat_header_info_icon' name='info_outline' scale='2'></icon>
                    Details
                </p>
            </div>
        </div>
        <div class='chat_messages'>
            <div v-for='message in messages' :key='message.id'>
                <app-message :user='message.user' :user-image='message.userImage'
                             :timestamp='message.timestamp' :message='message.message'></app-message>
            </div>
        </div>
        
        <app-chat-input :channel="room.name" :channel_id="roomId"></app-chat-input>
    </div>
</template>

<script>
    import Message from './messages/Message';
    import ChatInput from './messages/ChatInput';
    
    export default {
        computed: {
            room() {
                return this.$store.getters.getRoom;
            },
            messages() {
                return this.$store.getters.getMessages;
            },
            roomId() {
                return this.$store.getters.getRoomId;
            }
        },
        components: {
            'app-message': Message,
            'app-chat-input': ChatInput,
        }
    }
</script>

<style scoped>
    .chat {
        flex: 0.7;
        flex-grow: 1;
        overflow-y: scroll;
        padding-bottom: 150px;
    }

    .chat_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid lightgray;
    }

    .chat_channel_name {
        display: flex;
        align-items: center;
        text-transform: lowercase;
    }

    .chat_header_star_icon {
        margin-left: 5px;
        font-size: 18px;
    }

    .chat_header_right > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .chat_header_info_icon {
        margin-right: 5px;
        font-size: 16px;
    }
</style>
