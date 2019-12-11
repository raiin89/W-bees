import * as io from 'socket.io-client';
import feathers from 'feathers-client';
import { environment } from 'environments/environment';

const socket = io(environment.API);
const client = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.authentication({
        storage: window.localStorage
    }));

export default client;
