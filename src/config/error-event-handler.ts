import {AppEventHandler} from "../interfaces/AppEventHandler";
import localPort from "../utility/local-port";

export class ErrorEventHandler implements AppEventHandler {
    event: string;

    constructor() {
        this.event = "error";
    }

    handler(data: any): void {
        if (data.syscall !== 'listen') {
            throw data;
        }

        let bind = typeof localPort === 'string'
            ? 'Pipe ' + localPort
            : 'Port ' + localPort;

        switch (data.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw data;
        }
    }


}