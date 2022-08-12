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
        {plants.length > 0 ? (
          plants
            .filter((plant) => plants.find((product) => product.id === plant.id))
            .map(({ id, name, image, description, price }: Plant) => {
              return (
                <Product
                  id={id}
                  key={id}
                  name={name}
                  image={image}
                  description={description}
                  price={price}
                />
              );
            })
        ) : (
          <p className={styles.emptyBasket}>Your basket is empty. ☹️</p>
        )}
      </ProductsList>
    </div>
  );
}
