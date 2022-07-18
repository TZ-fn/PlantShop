import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ItemView from 'views/ItemView/ItemView';

const ItemPage: NextPage = () => {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  console.log(plants);
  const mockedPlant = plants[0];

  return mockedPlant !== undefined ? <ItemView {...mockedPlant} /> : <p>'Loading...'</p>;
};

export default ItemPage;
