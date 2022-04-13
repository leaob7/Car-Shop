import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import Validation from '../middlewares/Validation';

const CarsRoute = Router();

const carsController = new CarsController();
const validation = new Validation();

CarsRoute.get('/', carsController.read);

CarsRoute.get('/:id', validation.paramsValidation, carsController.readOne);

CarsRoute.post('/', validation.bodyValidation, carsController.create);

CarsRoute.put('/:id', validation.paramsValidation, carsController.update);

CarsRoute.delete('/:id', carsController.delete);

export default CarsRoute;