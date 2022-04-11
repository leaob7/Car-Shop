import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z.string().nonempty()
    .min(3, { message: 'Model must have at least 3 characters' }),
  year: z.number().gte(1900, { message: 'Year must be graten than 1900' }),
  color: z.string().nonempty()
    .min(3, { message: 'Color must have at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
