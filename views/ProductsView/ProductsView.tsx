import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Product from 'components/ProductsList/Product/Product';
import ProductsList from 'components/ProductsList/ProductsList';
import styles from './ProductsView.module.scss';

export default function ProductsView() {
  const plants = useSelector((state: RootState) => state.plants.plantsData);

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.sectionHeader}>Products</h2>
      <ProductsList>
        {plants.map(({ id, name, image, description, price }: Plant) => {
          return (
            <p>
              <p>{id}</p>
              <p>{name}</p>
              <p>{description}</p>
              <p>{price}</p>
            </p>
          );
        })}
      </ProductsList>
    </div>
  );
}
