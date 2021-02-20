import express, {Request, Response} from 'express';

class IndexController {
  private router = express.Router();

  constructor() {
    this.router.get('/', function (req: Request, res: Response) {
      res.status(200).send("Welcome to the backend of the useless app");
    });

    this.router.get('/healthcheck', (req: Request, res: Response) => {
      res.status(200).send("ok");
    });
  }

  public getRouter(){
    return this.router;
  }
}

export default IndexController;
