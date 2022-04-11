import { NextFunction, Request, Response } from 'express';
import { Car } from '../interfaces/CarInterface';
import CarsService from '../services/CarsService';
import PostCarSchema from '../Schemas/ValidationSchemas';
import Controller from '.';

class CarsController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarsService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  validation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await PostCarSchema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      return res.status(400).json(e);
    }
  };

  create = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const createCar = await this.service.create(req.body);
      return res.status(201).json(createCar);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const car = await this.service.readOne(id);
      return res.status(200).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const car = await this.service.update(id, req.body);
      return res.status(200).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const car = await this.service.delete(id);
      return res.status(200).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CarsController;
