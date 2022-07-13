import ProductsList from 'components/ProductsList/ProductsList';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import WishlistProduct from 'components/ProductsList/WishlistProduct/WishlistProduct';
import styles from './WishlistView.module.scss';

export default function WishlistView() {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  const wishlist = useSelector((state: RootState) => state.wishlist.products);

  return (
    <div className={styles.wishlistContainer}>
      <h2 className={styles.sectionHeader}>WishList</h2>
      <ProductsList>
        {wishlist.length > 0 ? (
          plants
            .filter((plant) => wishlist.includes(plant.id))
            .map((product) => {
              return <WishlistProduct key={product.id} {...product} />;
            })
        ) : (
          <p className={styles.emptyWishlist}>Your wishlist is empty. ☹️</p>
        )}
      </ProductsList>
    </div>
  );
}
