import styles from './BasketView.module.scss';
import ProductsList from '../../components/ProductsList/ProductsList';
import BasketAside from '../../components/BasketAside/BasketAside';

const BasketView = () => {
  return (
    <div className={styles.basketContainer}>
      <ProductsList />
      <BasketAside />
    </div>
  );
};

export default BasketView;
