import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import User from '../../models/User';
import dbConnect from 'db/dbConnect';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const password = req.body.password;
  const saltedPassword = await bcrypt.hash(password, salt);

  await dbConnect();

  try {
    const user = await User.create({ ...req.body, password: saltedPassword });
    res.status(201).json({ success: true, data: user });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default handler;