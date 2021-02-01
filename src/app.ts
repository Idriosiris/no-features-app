import express, {Express} from "express";
import localPort from "./utility/local-port";

export class App {
    private app: Express;

    constructor(_middlewares: any, _routers: any) {
        this.app = express();

        this.initMiddlewares(_middlewares);
        this.initRoutes(_routers);
        this.initListeners();
    }

    initMiddlewares(_middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        _middlewares.forEach((middleware) => {
            this.app.use(middleware);
        })
    }

    initRoutes(routers: { forEach: (arg0: (route: any) => void) => void; }) {
        routers.forEach((route) => {
            this.app.use('/', route);
        });
    }

    initListeners() {
        this.app.on('error', this.onError);
    }

    startListening(port: string | number | boolean) {
        this.app.listen(port, () => {
            console.log(`App listening on the http://localhost:${port}`)
        })
    }

    theApp(){
        return this.app;
    }

    private onError(error: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        let bind = typeof localPort === 'string'
            ? 'Pipe ' + localPort
            : 'Port ' + localPort;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}