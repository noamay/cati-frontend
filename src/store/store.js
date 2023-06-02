import Vuex from 'vuex';
import gameModule from './game';

export default new Vuex.Store({
    modules: {
        game: gameModule
    }
});