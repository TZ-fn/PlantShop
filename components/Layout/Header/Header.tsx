import Image from 'next/image';
import { ReactElement } from 'react';
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
        <div className={styles.logoContainer}>
          <Image src={MainLogo.src} width={80} height={80} />
          <h1>PlantShop</h1>
        </div>
        <NavBar />
        <SearchBar />
        <div className={styles.userControlPanel}>
          <div>
            <Image src={WishlistIcon.src} width={40} height={40} />
            Wishlist (0)
          </div>
          <div>
            <Image src={EmptyBasketIcon.src} width={40} height={40} />
            Basket
          </div>
          <div>
            <Image src={LoginIcon.src} width={40} height={40} />
            Login
          </div>
        </div>
      </div>
    </header>
  );
}
