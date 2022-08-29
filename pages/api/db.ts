import dbConnect from 'db/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        console.log(User.find());
        const users = await User.find();
        return res.status(200).json({ success: true, data: JSON.parse(JSON.stringify(users)) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
