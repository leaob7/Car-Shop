import { Schema, model as createModel } from 'mongoose';
import { Motorcycle as MotorcycleIn } from '../interfaces/MotorcycleInterface';
import MongoModel from './MongoModel';

const MotorcycleSchema = new Schema({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
});

class Motorcycle extends MongoModel<MotorcycleIn> {
  constructor(model = createModel('Motorcycle', MotorcycleSchema)) {
    super(model);
  }
}

export default Motorcycle;