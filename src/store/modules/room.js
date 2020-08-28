const state = {
    room: null,
    room_id: null,
};

const getters = {
    getRoom: state => {
        return state.room;
    },
    getRoomId: state => {
        return state.room_id
    }
};

const mutations = {
    setRoomData(state, data) {
        state.room = data;
    },
    setRoomId(state, id) {
        state.room_id = id;
    }
};

const actions = {
    setRoomData: ({commit}, payload) => {
        commit('setRoomData', payload)
    },
    setRoomId: ({commit}, id) => {
        commit('setRoomId', id)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
