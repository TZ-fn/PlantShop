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
    const isPasswordCorrect = user.password === req.body.password;
    isPasswordCorrect
      ? res.status(200).json('Password correct')
      : res.status(401).json('Password incorrect');
  } catch (e) {
    res.status(500).json(e);
  }
});

export default handler;
