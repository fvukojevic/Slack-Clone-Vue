import Vue from 'vue';
import Vuex from 'vuex';
import channels from './modules/channels';
import room from './modules/room';
import messages from './modules/messages';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {

    },
    modules: {
        channels,
        room,
        messages,
        user
    },
});
