import type { NextApiRequest, NextApiResponse } from 'next';

import { Bar } from '../../types';

const Data = [
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
      beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
  },
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
      beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
  },
  {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
      beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bar>
) {
  res.status(200).json(Data);
}
