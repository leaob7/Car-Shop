import { z } from 'zod';

export const PostCarSchema = z.object({
  body: z.object({
    model: z.string().nonempty()
      .min(3, { message: 'Model must have at least 3 characters' }),
    year: z.number().gte(1900, { message: 'Year must be graten than 1900' }),
    color: z.string().nonempty()
      .min(3, { message: 'Color must have at least 3 characters' }),
    status: z.boolean().optional(),
    buyValue: z.number().int(),
    doorsQty: z.number({ required_error: 'doorsQty name is required' })
      .gte(2).lte(4),
    seatsQty: z.number({ required_error: 'seatsQty name is required' })
      .gte(2).lte(7),
  }),
});

export const ReadOneSchema = z.object({
  params: z.object({
    id: z.string().min(
      24,
      { message: 'Id must have 24 hexadecimal characters' },
    ).optional(),
  }),
});
