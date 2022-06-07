import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import ProductsList from 'components/ProductsList/ProductsList';
import Product from 'components/ProductsList/Product/Product';
import BasketAside from 'components/BasketAside/BasketAside';
import styles from './BasketView.module.scss';

const BasketView = () => {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  return (
    <div className={styles.basketViewContainer}>
      <h2 className={styles.sectionHeader}>Basket</h2>
      <div className={styles.basketContainer}>
        <ProductsList>
          {plants.length > 0
            ? plants.map(({ id, name, image, description, price }: Plant) => {
                console.log(name);
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
            : 'Loading...'}
        </ProductsList>
        <BasketAside />
      </div>
    </div>
  );
};

export default BasketView;
