import express, {Express} from "express";
import {AppEventHandler} from "./interfaces/AppEventHandler";

export class App {
    private app: Express;

    constructor(_middlewares: any, _routers: any, _handlers: AppEventHandler[]) {
        this.app = express();

        this.initMiddlewares(_middlewares);
        this.initRoutes(_routers);
        this.initListeners(_handlers);
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

    initListeners(handlers: AppEventHandler[]) {
        handlers.forEach((aeh) => {
            this.app.on(aeh.event, aeh.handler);
        })
    }

    startListening(port: string | number | boolean) {
        this.app.listen(port, () => {
            console.log(`App listening on the http://localhost:${port}`)
        })
    }

    theApp() {
        return this.app;
    }
}