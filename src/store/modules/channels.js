const state = {
    channels: []
};

const getters = {
    getChannels: state => {
        return state.channels;
    }
};

const mutations = {
    setChannels(state, channels) {
        state.channels = channels;
    }
};

const actions = {
    loadChannels: ({commit}, channels) => {
        commit('setChannels', channels)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
