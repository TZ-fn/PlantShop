import User from '../../models/User';
import nextConnect from 'next-connect';
import dbConnect from 'db/dbConnect';

const handler = nextConnect();

handler.get(async (req, res) => {
  await dbConnect();
  const users = await User.find();
  console.log(users);
  res.json(users);
});

export default handler;
