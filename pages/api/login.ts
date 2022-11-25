import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import User from '../../models/User';
import dbConnect from 'db/dbConnect';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  try {
    const user = await User.findOne(req.body.email);
    res.status(201).json({ success: true, data: user });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default handler;
