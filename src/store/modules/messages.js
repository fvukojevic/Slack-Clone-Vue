const state = {
    messages: null
};

const getters = {
    getMessages: state => {
        return state.messages;
    }
};

const mutations = {
    setMessages(state, data) {
        state.messages = data;
    }
};

const actions = {
    setMessages: ({commit}, payload) => {
        commit('setMessages', payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
