import styles from './BasketView.module.scss';
import ProductsList from 'components/ProductsList/ProductsList';
import Product from 'components/ProductsList/Product/Product';
import BasketAside from 'components/BasketAside/BasketAside';

const BasketView = () => {
  return (
    <div className={styles.basketContainer}>
      <ProductsList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsList>
      <BasketAside />
    </div>
  );
};

export default BasketView;
