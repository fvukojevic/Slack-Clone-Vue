<template>
    <div class="sidebar">
        <div class="sidebar_header">
            <div class="sidebar_info">
                <h2>Slack Workspace</h2>
                <h3>
                    <icon class="sidebar-icon" name="lens"></icon>
                    {{ user.displayName }}
                </h3>
            </div>
            <icon class="sidebar-icon" name="create" scale="2"></icon>
        </div>
        <app-sidebar-option icon="insert_comment" title="Threads"></app-sidebar-option>
        <app-sidebar-option icon="inbox" title="Mentions & reactions"></app-sidebar-option>
        <app-sidebar-option icon="drafts" title="Saved items"></app-sidebar-option>
        <app-sidebar-option icon="bookmark_border" title="Channel browser"></app-sidebar-option>
        <app-sidebar-option icon="people" title="People & user groups"></app-sidebar-option>
        <app-sidebar-option icon="apps" title="Apps"></app-sidebar-option>
        <app-sidebar-option icon="folder" title="File Browser"></app-sidebar-option>
        <app-sidebar-option icon="expand_less" title="Show less"></app-sidebar-option>
        <hr>
        <app-sidebar-option icon="expand_more" title="Channels"></app-sidebar-option>
        <hr>
        <app-sidebar-option icon="add" title="Add Channel" :option="addChannel()"></app-sidebar-option>
        <div v-for="channel in channels" :key="channel.id">
            <app-sidebar-option :title="channel.name" :id="channel.id" :option="selectChannel(router, channel.id)"></app-sidebar-option>
        </div>
    </div>
</template>

<script>
    import SidebarOption from "./SidebarOption";
    import {mapGetters} from 'vuex';
    import db from "../../firebase";

    export default {
        data() {
            return {
                router: this.$router,
            }
        },
        computed: {
            ...mapGetters({
                channels: 'getChannels',
                user: 'getUser',
            })
        },
        methods: {
            addChannel() {
                return () => {
                    const channelName = prompt('Enter the channel name');
                    if(channelName) {
                        db.collection('rooms').add({
                            name: channelName
                        });
                    }
                }
            },
            selectChannel(router, id) {
                return () => {
                    router.push({path: `/room/${id}`}).catch(() => {
                    });
                    db.collection('rooms').doc(id).onSnapshot((snapshot) => {
                            this.$store.dispatch('setRoomData', snapshot.data())
                            this.$store.dispatch('setRoomId', id);
                            document.title = snapshot.data().name;
                        }
                    );

                    db.collection('rooms').doc(id)
                    .collection('messages')
                    .orderBy('timestamp', 'asc')
                    .onSnapshot((snapshot) => {
                        this.$store.dispatch('setMessages', snapshot.docs.map(doc => doc.data()));
                    })
                }
            }
        },
        components: {
            'app-sidebar-option': SidebarOption
        }
    }
</script>

<style scoped>
    .sidebar {
        color: white;
        flex: 0.3;
        background-color: var(--slack-color);
        border-top: 1px solid #49274b;
        max-width: 260px;
    }

    .sidebar_header {
        display: flex;
        border-bottom: 1px solid #49274b;
        padding: 13px;
    }

    .sidebar_info {
        flex: 1;
    }

    .sidebar_info > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    .sidebar_info > h3 {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
    }

    .sidebar_info > h3 > .md-icon {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }

    .sidebar_header > .sidebar-icon {
        padding: 4px;
        color: #49274b;
        font-size: 16px;
        background-color: white;
        border-radius: 999px;
    }

    .sidebar > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
</style>