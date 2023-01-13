import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import styles from './Header.module.scss';
import ProductCountBadge from 'components/elements/ProductCountBadge/ProductCountBadge';

export default function Header(): ReactElement {
  const basket = useSelector((state: RootState) => state.basket.products);
  const wishlist = useSelector((state: RootState) => state.wishlist.products);
  const productsInBasket = basket.reduce((count, product) => (count += product.quantity), 0);
  const productsInWishlist = wishlist.length;
  const isUserAuthorised = useSelector((state: RootState) => state.authorisation.isUserAuthorised);

  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href={'/'}>
          <div className={styles.logoContainer}>
            <div className={styles.innerLogoContainer}>
              <Image src='/mainLogo.svg' width={100} height={100} layout='responsive' />
            </div>
            <h1 className={styles.logoText}>PlantShop</h1>
          </div>
        </Link>

        <NavBar />

        <SearchBar />

        <div className={styles.userControlPanel}>
          <Link href={'/wishlist'}>
            <a className={styles.controlItem}>
              {productsInWishlist > 0 && (
                <ProductCountBadge quantity={productsInWishlist} type='wishlist' />
              )}
              {wishlist.length === 0 ? (
                <Image src='/icons/wishlistIconEmpty.svg' width={40} height={40} />
              ) : (
                <Image src='/icons/wishlistIcon.svg' width={40} height={40} />
              )}
              Wishlist
            </a>
          </Link>
          <Link href={'/basket'}>
            <a className={styles.controlItem}>
              {productsInBasket > 0 && (
                <ProductCountBadge quantity={productsInBasket} type='basket' />
              )}
              {basket.length === 0 ? (
                <Image src='/icons/emptyBasketIcon.svg' width={40} height={40} />
              ) : (
                <Image src='/icons/fullBasketIcon.svg' width={40} height={40} />
              )}
              Basket
            </a>
          </Link>
          {isUserAuthorised ? (
            <Link href={'/account'}>
              <a className={styles.controlItem}>
                <Image src='/icons/accountIcon.svg' width={40} height={40} />
                Account
              </a>
            </Link>
          ) : (
            <Link href={'/login'}>
              <a className={styles.controlItem}>
                <Image src='/icons/loginIcon.svg' width={40} height={40} />
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
