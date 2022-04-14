import { Types } from 'mongoose';
import { Motorcycle } from './MotorcycleInterface';

export interface MockMotorcycle extends Motorcycle {
  _id: Types.ObjectId;
}

export interface MockUpdatedMotorcycle extends Motorcycle {
  _id: string;
}