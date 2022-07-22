import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import capitalize from 'utils/capitalize';
import ItemView from 'views/ItemView/ItemView';

const ItemPage: NextPage = () => {
  const router = useRouter();
  const product = router.query.itemPage;
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  const currentPlant = plants.filter((plant) => {
    if (product !== undefined && typeof product !== 'object') {
      return plant.name === capitalize(product);
    }
  })[0];

  return currentPlant ? <ItemView {...currentPlant} /> : <p>Loading...</p>;
};

export default ItemPage;
