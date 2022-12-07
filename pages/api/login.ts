import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import User from '../../models/User';
import dbConnect from 'db/dbConnect';
import bcrypt from 'bcrypt';

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const password = req.body.password;

  await dbConnect();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User does not exist' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    isPasswordCorrect
      ? res.status(200).json({ success: true, message: 'Password is correct' })
      : res.status(401).json({ success: false, message: 'Password is incorrect' });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default handler;
