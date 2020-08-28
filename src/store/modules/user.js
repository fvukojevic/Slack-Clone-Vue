const state = {
    user: null
};

const getters = {
    getUser: state => {
        return state.user;
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

const actions = {
    setUser: ({commit}, payload) => {
        commit('setUser', payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
