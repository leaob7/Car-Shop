import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { PostCarSchema, ParamsSchema } from '../Schemas/ValidationSchemas';

class Validation {
  bodyValidation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await PostCarSchema.parseAsync({
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

export default Validation;