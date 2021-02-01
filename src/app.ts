import express, {Express} from "express";

export class App {
    private app: Express;

    constructor(_middlewares: any, _routers: any) {
        this.app = express();

        this.initMiddlewares(_middlewares);
        this.initRoutes(_routers);
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

    startListening(port: string | number | boolean) {
        this.app.listen(port, () => {
            console.log(`App listening on the http://localhost:${port}`)
        })
    }

    theApp(){
        return this.app;
    }
}