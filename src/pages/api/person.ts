import type { NextApiRequest, NextApiResponse } from 'next';
import { Person } from '../../types';

const Data = [
  { active: false, age: '11', metaData: [], siblings: [], name: 'John Doe' },
  { active: false, age: 0, metaData: [], siblings: [], name: 'John Doe' },
  { active: false, age: 0, metaData: [], siblings: [], name: 'John Doe' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person>
) {
  res.status(200).json(Data);
}
