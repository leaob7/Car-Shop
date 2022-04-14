import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';
import {
  ParamsSchema,
  PostMotorcyleSchema,
} from '../Schemas/ValidationSchemas';

class MotorCycleValidation {
  bodyValidation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await PostMotorcyleSchema.parseAsync({
        body: req.body,
      });
      
      next();
    } catch (e) {
      if (e instanceof z.ZodError) {
        const zError = e.errors.find((error) => error);
        return res.status(400).json({ error: zError?.message });
      }
    }
  };

  paramsValidation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await ParamsSchema.parseAsync({
        params: req.params,
      });

      next();
    } catch (e) {
      if (e instanceof z.ZodError) {
        const zError = e.errors.find((error) => error);
        return res.status(400).json({ error: zError?.message });
      }
    }
  };
}

export default MotorCycleValidation;