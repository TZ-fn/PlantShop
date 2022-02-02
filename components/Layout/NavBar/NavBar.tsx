import Link from 'next/link';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import MainLogo from '../../../public/mainLogo.svg';
import LoginIcon from '../../../public/icons/loginIcon.svg';
import EmptyBasketIcon from '../../../public/icons/emptyBasketIcon.svg';
import FullBasketIcon from '../../../public/icons/fullBasketIcon.svg';
import WishlistIcon from '../../../public/icons/wishlistIcon.svg';
import styles from './NavBar.module.scss';

export default function Header(): ReactElement {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image src={MainLogo.src} width={80} height={80} />
          <h1>PlantShop</h1>
        </div>
        <nav className={styles.navContainer}>
          <Link href={''}>
            <a className={styles.navLink}>Home</a>
          </Link>
          <Link href={''}>
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href={''}>
            <a className={styles.navLink}>Products</a>
          </Link>
          <Link href={''}>
            <a className={styles.navLink}>Contact</a>
          </Link>
        </nav>
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
