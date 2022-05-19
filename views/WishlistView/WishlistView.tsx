import ProductsList from 'components/ProductsList/ProductsList';
import WishlistProduct from 'components/ProductsList/WishlistProduct/WishlistProduct';
import styles from './WishlistView.module.scss';

export default function WishlistView() {
  return (
    <div className={styles.wishlistContainer}>
      <ProductsList>
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
      </ProductsList>
    </div>
  );
}
