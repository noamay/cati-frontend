import store from '@/store/store';

class PlayerJoinedHandler {
    handle(player) {
        store.commit('addPlayer', player);
    }
}

export default PlayerJoinedHandler;