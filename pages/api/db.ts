import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import User from '../../models/User';
import dbConnect from 'db/dbConnect';

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const users = await User.find();
  res.json(users);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
});

export default handler;
