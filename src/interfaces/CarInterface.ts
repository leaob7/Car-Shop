import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

export const CarSchema = z.object({
  doorsQty: z.number({ required_error: 'doorsQty name is required' })
    .gte(2).lte(4),
  seatsQty: z.number({ required_error: 'seatsQty name is required' })
    .gte(2).lte(7),
});

type ZodCar = z.infer<typeof CarSchema>;

export type Car = Vehicle & ZodCar;
