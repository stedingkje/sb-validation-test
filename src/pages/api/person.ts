import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const Data = [
  {
    active: false,
    age: 0,
    metaData: ['1'],
    siblings: [1, 2],
    name: 'John Doe',
  },
  {
    active: false,
    age: 0,
    metaData: ['1'],
    siblings: ['1', '1'],
    name: 'John Doe',
  },
  // Wrong data object, triggers custom error message 'Brand is required data'
  {
    age: 0,
    metaData: ['1'],
    siblings: ['1', '1'],
    name: 'John Doe',
  },
];

const sibling = z.string().or(z.number());

const metaData = z.string().or(z.number()).optional();

const personScheme = z.array(
  z.object({
    active: z.boolean({ required_error: 'Brand is required data' }),
    age: z.number(),
    metaData: z.array(metaData),
    siblings: z.array(sibling),
    name: z.string(),
  })
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = personScheme.parse(Data);
    res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
}
