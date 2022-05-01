import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLogo from '../../../public/mainLogo.svg';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import LoginIcon from '../../../public/icons/loginIcon.svg';
import EmptyBasketIcon from '../../../public/icons/emptyBasketIcon.svg';
import FullBasketIcon from '../../../public/icons/fullBasketIcon.svg';
import WishlistIcon from '../../../public/icons/wishlistIcon.svg';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href={'/'}>
          <div className={styles.logoContainer}>
            <Image src={MainLogo.src} width={100} height={100} />
            <h1>PlantShop</h1>
          </div>
        </Link>

        <NavBar />

        <SearchBar />

        <div className={styles.userControlPanel}>
          <Link href={'/wishlist'}>
            <div>
              <Image src={WishlistIcon.src} width={40} height={40} />
              Wishlist (0)
            </div>
          </Link>
          <Link href={'/basket'}>
            <div>
              <Image src={EmptyBasketIcon.src} width={40} height={40} />
              Basket
            </div>
          </Link>
          <Link href={'/login'}>
            <div>
              <Image src={LoginIcon.src} width={40} height={40} />
              Login
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
