import { Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  update = async (id: string, obj: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj },
    );

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete({ _id: id });
}

export default MongoModel;