import ProductsList from 'components/ProductsList/ProductsList';
import WishlistProduct from 'components/ProductsList/WishlistProduct/WishlistProduct';
import styles from './WishlistView.module.scss';

export default function WishlistView() {
  return (
    <div className={styles.wishlistContainer}>
      <h2 className={styles.sectionHeader}>WishList</h2>
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
