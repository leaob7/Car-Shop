import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type ZodCar = z.infer<typeof CarSchema>;

export type Car = Vehicle & ZodCar;
