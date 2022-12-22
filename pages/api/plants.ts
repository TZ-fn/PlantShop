import { NextApiRequest, NextApiResponse } from 'next';
import { PlantsData } from '../../types/types';
import plantsData from '../../public/data/plantsData';

export default function handler(_request: NextApiRequest, response: NextApiResponse<PlantsData>) {
  response.status(200).json(plantsData);
}
