import express, { Router } from 'express';
import connectToDatabase from './connection';
import CarsRoute from './routes/CarsRouter';
import MotorcycleRoute from './routes/MotorcycleRouter';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public routes() {
    this.app.use('/cars', CarsRoute);
    this.app.use('/motorcycles', MotorcycleRoute);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
