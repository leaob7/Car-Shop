import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const MotorcycleSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

type ZodMotorcycle = z.infer<typeof MotorcycleSchema>;

export type Motorcycle = Vehicle & ZodMotorcycle;
