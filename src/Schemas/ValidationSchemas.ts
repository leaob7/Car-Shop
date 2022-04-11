import { z } from 'zod';

const PostCarSchema = z.object({
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

export default PostCarSchema;