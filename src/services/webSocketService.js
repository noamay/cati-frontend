import PlayerJoinedHandler from './handlers/PlayerJoinedHandler';

class WebSocketService {
    connect(url) {
        this.socket = new WebSocket(url);
        this.handlers = {
            playerJoined: new PlayerJoinedHandler(),
        };

        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.routeMessage(message);
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    routeMessage(message) {
        const {type, data} = message;
        if (this.handlers[type]) {
            this.handlers[type].handle(data);
        }
    }
}
export default WebSocketService;
