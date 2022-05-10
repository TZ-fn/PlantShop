import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './NavBar.module.scss';

export default function NavBar(): ReactElement {
  return (
    <nav className={styles.navContainer}>
      <Link href='/'>
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href='/products'>
        <a className={styles.navLink}>Products</a>
      </Link>
      <Link href='/contact'>
        <a className={styles.navLink}>Contact</a>
      </Link>
    </nav>
  );
}
