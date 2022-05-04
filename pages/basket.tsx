import type { NextPage } from 'next';
import styles from './basket.module.scss';
import ProductsList from '../components/ProductsList/ProductsList';
import BasketAside from '../components/BasketAside/BasketAside';

const Basket: NextPage = () => {
  return (
    <div className={styles.basketContainer}>
      <ProductsList />
      <BasketAside />
    </div>
  );
};

export default Basket;
