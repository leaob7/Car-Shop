import { Car } from '../interfaces/CarInterface';
import Service from '.';
import CarsModel from '../models/CarsModel';

class CarsService extends Service<Car> {
  constructor(model = new CarsModel()) {
    super(model);
  }
}

export default CarsService;