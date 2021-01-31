import express, {Express} from "express";
import indexRouter from "./routes";

export class App {
    private app: Express;

    constructor(_middlewares: any) {
        this.app = express();

        this.initMiddlewares(_middlewares);
        this.initRoutes();
    }

    initMiddlewares(_middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        _middlewares.forEach((middleware) => {
            this.app.use(middleware);
        })
    }

    initRoutes() {
        this.app.use('/', indexRouter);
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