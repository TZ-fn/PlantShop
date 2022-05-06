import Link from 'next/link';
import Image from 'next/image';
import MainLogo from '../../../public/mainLogo.svg';
import FacebookLogo from '../../../public/icons/fbIcon.svg';
import TwitterLogo from '../../../public/icons/twitterIcon.svg';
import { ReactElement } from 'react';
import styles from './Footer.module.scss';

export default function Header(): ReactElement {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <Link href={'/'}>
          <div className={styles.logoContainer}>
            <Image src={MainLogo.src} width={50} height={50} />
            <h1 className={styles.logoText}>PlantShop</h1>
          </div>
        </Link>
        <div className={styles.socialsContainer}>
          <Link href={'/'}>
            <a className={styles.socialsLink}>
              <Image src={FacebookLogo.src} width={40} height={40} />
              <span className='visually-hidden'>Connect with us on Facebook</span>
            </a>
          </Link>
          <Link href={'/'}>
            <a className={styles.socialsLink}>
              <Image src={TwitterLogo.src} width={40} height={40} />
              <span className='visually-hidden'>Connect with us on Twitter</span>
            </a>
          </Link>
        </div>
        <p className={styles.textContainer}>
          Copyright © 2022 - present | <span className={styles.nameHighlight}>PlantShop</span> | All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
