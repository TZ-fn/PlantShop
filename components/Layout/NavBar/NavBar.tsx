import Link from 'next/link';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import MainLogo from '../../../public/mainLogo.svg';
import styles from './NavBar.module.css';

export default function Header(): ReactElement {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image src={MainLogo.src} width={100} height={100} />
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
      </div>
    </header>
  );
}
