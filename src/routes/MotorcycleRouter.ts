import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorCycleValidation from '../middlewares/MotorcycleValidation';

const MotorcycleRoute = Router();

const motorcycleController = new MotorcycleController();
const validation = new MotorCycleValidation();

MotorcycleRoute.get('/', motorcycleController.read);

MotorcycleRoute.get(
  '/:id',
  validation.paramsValidation,
  motorcycleController.readOne,
);

MotorcycleRoute.post(
  '/',
  validation.bodyValidation,
  motorcycleController.create,
);

MotorcycleRoute.put(
  '/:id',
  validation.paramsValidation,
  motorcycleController.update,
);

MotorcycleRoute.delete('/:id', motorcycleController.delete);

export default MotorcycleRoute;