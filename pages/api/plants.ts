import plants from '../../public/data/plants';

export default function handler(req, res) {
  res.status(200).json(plants);
}
