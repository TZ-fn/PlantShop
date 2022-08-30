import mongoose from 'mongoose';
import User from '../../models/User';
import nextConnect from 'next-connect';

const dbConnect = async () => mongoose.connect(process.env.MONGODB_URI);

const handler = nextConnect();

handler.get(async (req, res) => {
  await dbConnect();
  const users = await User.find();
  console.log(users);
  res.json(users);
});

export default handler;
