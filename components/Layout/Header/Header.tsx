import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import MainLogo from 'public/mainLogo.svg';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import LoginIcon from 'public/icons/loginIcon.svg';
import EmptyBasketIcon from 'public/icons/emptyBasketIcon.svg';
import FullBasketIcon from 'public/icons/fullBasketIcon.svg';
import WishlistIcon from 'public/icons/wishlistIcon.svg';
import WishlistIconEmpty from 'public/icons/wishlistIconEmpty.svg';
import styles from './Header.module.scss';
import BasketBadge from 'components/elements/BasketBadge/BasketBadge';

export default function Header(): ReactElement {
  const basket = useSelector((state: RootState) => state.basket.products);
  const productsInBasket = basket.reduce((count, product) => (count += product.quantity), 0);

  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href={'/'}>
          <div className={styles.logoContainer}>
            <Image src={MainLogo.src} width={100} height={100} />
            <h1 className={styles.logoText}>PlantShop</h1>
          </div>
        </Link>

        <NavBar />

        <SearchBar />

        <div className={styles.userControlPanel}>
          <Link href={'/wishlist'}>
            <a className={styles.controlItem}>
              {basket.length === 0 ? (
                <Image src={WishlistIconEmpty.src} width={40} height={40} />
              ) : (
                <Image src={WishlistIcon.src} width={40} height={40} />
              )}
              Wishlist (0)
            </a>
          </Link>
          <Link href={'/basket'}>
            <a className={styles.controlItem}>
              <BasketBadge quantity={productsInBasket} />
              {basket.length === 0 ? (
                <Image src={EmptyBasketIcon.src} width={40} height={40} />
              ) : (
                <Image src={FullBasketIcon.src} width={40} height={40} />
              )}
              Basket
            </a>
          </Link>
          <Link href={'/login'}>
            <a className={styles.controlItem}>
              <Image src={LoginIcon.src} width={40} height={40} />
              Login
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
