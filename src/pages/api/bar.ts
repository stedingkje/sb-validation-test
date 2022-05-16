import type { NextApiRequest, NextApiResponse } from 'next';

import { Bar } from '../../types';

const Data: Bar[] = [
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
  },
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
  },
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bar[]>
) {
  res.status(200).json(Data);
}
