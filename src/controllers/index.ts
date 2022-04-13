import { Request, Response } from 'express';
import Service from '../services';

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Controller<T> {
  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) { }

  abstract create(
    req: Request,
    res: Response,
  ): Promise<typeof res>;

  read = async (
    req: Request,
    res: Response,
  ): Promise<typeof res> => {
    try {
      const cars = await this.service.read();
      return res.status(200).json(cars);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  abstract readOne(
    req: Request,
    res: Response,
  ): Promise<typeof res>;

  abstract update(
    req: Request,
    res: Response,
  ): Promise<typeof res>;

  abstract delete(
    req: Request,
    res: Response,
  ): Promise<typeof res>;
}

export default Controller;
