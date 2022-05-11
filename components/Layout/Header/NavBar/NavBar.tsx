import Link from 'next/link';
import styles from './NavBar.module.scss';

export default function NavBar() {
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
