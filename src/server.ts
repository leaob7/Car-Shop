import CustomRouter from './routes/Router';
import App from './app';
import CarsController from './controllers/CarsController';
import { Car } from './interfaces/CarInterface';

const server = new App();

const carsController = new CarsController();

const carsRouter = new CustomRouter<Car>();
carsRouter.addRoute(carsController.validation, carsController);

server.addRouter(carsRouter.router);

export default server;