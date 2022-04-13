import { Request, Response } from 'express';
import Controller from '.';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleService from '../services/MotorcycleService';

class MotorcycleController extends Controller<Motorcycle> {
  constructor(service = new MotorcycleService()) {
    super(service);
  }

  create = async (req: Request, res: Response) => {
    try {
      const motorcycle = await this.service.create(req.body);
      return res.status(201).json(motorcycle);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const motorcycle = await this.service.readOne(id);
      return res.status(200).json(motorcycle);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const motorcycle = await this.service.update(id, req.body);
      return res.status(200).json(motorcycle);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const motorcycle = await this.service.delete(id);
      return res.status(204).json(motorcycle);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default MotorcycleController;