import * as express from 'express';
import * as cors from 'cors';
import route from './routes/index';

class App {
  public app: express.Express;
  
  constructor() {
    this.app = express();
    this.config();
    this.app.use(cors());
    this.app.use(route);

  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Server running here: ${PORT}`));
  }

  public getApp() {
    return this.app;
  }
}

export { App };

export const { app } = new App();
