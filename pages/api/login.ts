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
    const user = await User.findOne({ email: req.body.email });

    const isPasswordCorrect = user.password === saltedPassword;
    isPasswordCorrect
      ? res.status(200).json('Password is correct')
      : res.status(401).json('Password is incorrect');
  } catch (e) {
    res.status(500).json(e);
  }
});

export default handler;
