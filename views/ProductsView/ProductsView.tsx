import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Product from 'components/ProductsList/Product/Product';
import ProductsList from 'components/ProductsList/ProductsList';
import styles from './ProductsView.module.scss';

export default function ProductsView() {
  const plants = useSelector((state: RootState) => state.plants.plantsData);

  console.log(plants);
  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.sectionHeader}>Products</h2>
      <ProductsList>
        {plants &&
          plants.map((plant) => {
            return <Product {...plant} />;
          })}
      </ProductsList>
    </div>
  );
}
