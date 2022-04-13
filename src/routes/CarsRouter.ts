import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import Validation from '../middlewares/Validation';

const CarsRoute = Router();

const carsController = new CarsController();
const validation = new Validation();

CarsRoute.get('/', carsController.read);

CarsRoute.get('/:id', validation.readOneValidation, carsController.readOne);

CarsRoute.post('/', validation.createValidation, carsController.create);

CarsRoute.put('/:id', validation.readOneValidation, carsController.update);

export default CarsRoute;