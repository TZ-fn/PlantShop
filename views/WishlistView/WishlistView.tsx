import ProductsList from 'components/ProductsList/ProductsList';
import Product from 'components/ProductsList/Product/Product';
import styles from './WishlistView.module.scss';

export default function WishlistView() {
  return (
    <div className={styles.wishlistContainer}>
      <ProductsList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsList>
    </div>
  );
}
