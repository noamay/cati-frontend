import apiService from '@/services/apiService';

const state = {
    gameData: null
};

const mutations = {
    setGameData(state, data) {
        state.gameData = data;
    }
};

const actions = {
    async joinGame({ commit }, data) {
        try {
            const response = await apiService.joinGame(data);
            commit('setGameData', response.data);
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
        }
    },
};

export default ({
    namespaced: true,
    state,
    mutations,
    actions
});