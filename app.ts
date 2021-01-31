import express, {Express} from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import indexRouter from "./routes";

export class App {
    private app: Express;

    constructor() {
        this.app = express();

        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cookieParser());
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