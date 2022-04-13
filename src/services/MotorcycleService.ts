import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleModel from '../models/MotorcycleModel';
import Service from '.';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }
}

export default MotorcycleService;
