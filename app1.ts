import express, {Express} from "express";

export class App {
    private app: Express;

    constructor() {
        this.app = express();
    }

    theApp(){
        return this.app;
    }
}