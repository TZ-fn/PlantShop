import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import capitalize from 'utils/capitalize';
import ItemView from 'views/ItemView/ItemView';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import styles from 'styles/ItemPage.module.scss';

const ItemPage: NextPage = () => {
  const router = useRouter();
  const product = router.query.itemPage;
  const plants = useSelector((state: RootState) => state.plants.plantsData);

  let currentPlant;
  if (plants !== null) {
    currentPlant = plants.filter((plant) => {
      if (product !== undefined && typeof product !== 'object') {
        return plant.name === capitalize(product);
      }
    });
  }

  if (currentPlant && currentPlant?.length === 0) {
    return (
      <p className={styles.productNotFound}>
        Product <span className={styles.productName}>{product}</span> has not been found. ☹️
      </p>
    );
  }

  return currentPlant && currentPlant[0] !== undefined ? (
    <ItemView {...currentPlant[0]} />
  ) : (
    <LoadingSpinner />
  );
};

export default ItemPage;
