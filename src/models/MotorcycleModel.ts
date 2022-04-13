import { Schema, model as createModel } from 'mongoose';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MongoModel from './MongoModel';

const MotorcycleSchema = new Schema({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

class MotorcycleModel extends MongoModel<Motorcycle> {
  constructor(model = createModel('Motorcycle', MotorcycleSchema)) {
    super(model);
  }
}

export default MotorcycleModel;