import type { NextApiRequest, NextApiResponse } from 'next';

import {Car} from '../../types';

const Data = [
  {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    mileage: 199999.99,
    extras: ['2001 Special Edition'],
  },
  {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    mileage: 199999.99,
    extras: ['2001 Special Edition'],
  },
  {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    mileage: 199999.99,
    extras: ['2001 Special Edition'],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car>
) {
  res
    .status(200)
    .json(Data);
}
