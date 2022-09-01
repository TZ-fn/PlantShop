import User from '../../models/User';
import nextConnect from 'next-connect';
import dbConnect from 'db/dbConnect';

const handler = nextConnect();

handler.get(async (req, res) => {
  await dbConnect();
  const users = await User.find();
  res.json(users);
});

handler.post(async (req, res) => {
  await dbConnect();
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
});

export default handler;
